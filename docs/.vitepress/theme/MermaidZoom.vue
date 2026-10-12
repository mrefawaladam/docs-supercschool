<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isOpen = ref(false)
const svgHtml = ref('')
const scale = ref(1)
const initialFitScale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const containerRef = ref<HTMLElement | null>(null)

// Pasang event listener click pada setiap diagram Mermaid di halaman
function attachMermaidListeners() {
  nextTick(() => {
    const containers = document.querySelectorAll('.mermaid, .language-mermaid, svg[id^="mermaid"]')
    containers.forEach((el) => {
      const target = el as HTMLElement
      if (target.dataset.zoomAttached) return
      target.dataset.zoomAttached = 'true'

      target.style.cursor = 'zoom-in'
      target.title = 'Klik untuk memperbesar diagram'

      target.addEventListener('click', (e) => {
        const svgEl = target.tagName.toLowerCase() === 'svg' ? target : target.querySelector('svg')
        if (svgEl) {
          e.preventDefault()
          e.stopPropagation()
          openModal(svgEl as SVGElement)
        }
      })
    })
  })
}

function openModal(svgEl: SVGElement) {
  const clone = svgEl.cloneNode(true) as SVGElement

  // Ambil ukuran asli dari viewBox SVG
  let vbWidth = 900
  let vbHeight = 250

  const viewBox = clone.getAttribute('viewBox')
  if (viewBox) {
    const parts = viewBox.trim().split(/[\s,]+/).map(Number)
    if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
      vbWidth = parts[2]
      vbHeight = parts[3]
    }
  } else {
    const rect = svgEl.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) {
      vbWidth = rect.width
      vbHeight = rect.height
    }
  }

  // Bersihkan inline style lama yang mungkin mengunci width/height tidak tepat
  clone.removeAttribute('style')
  clone.setAttribute('width', `${vbWidth}`)
  clone.setAttribute('height', `${vbHeight}`)
  clone.style.width = `${vbWidth}px`
  clone.style.height = `${vbHeight}px`
  clone.style.maxWidth = 'none'
  clone.style.maxHeight = 'none'
  clone.style.display = 'block'

  svgHtml.value = clone.outerHTML

  // Total dimensi kartu (termasuk padding 32px kiri-kanan = 64px, 24px atas-bawah = 48px)
  const cardWidth = vbWidth + 64
  const cardHeight = vbHeight + 48

  // Area viewport yang tersedia (dengan margin aman untuk header dan toolbar)
  const availableWidth = Math.max(window.innerWidth - 100, 320)
  const availableHeight = Math.max(window.innerHeight - 160, 240)

  // Hitung rasio pas layar (agar seluruh diagram terlihat utuh tanpa terpotong)
  const scaleW = availableWidth / cardWidth
  const scaleH = availableHeight / cardHeight
  let fitRatio = Math.min(scaleW, scaleH)

  // Jika diagram sudah lebih kecil dari layar, pertahankan ukuran natural (1.0x).
  // Jangan di-zoom in berlebihan!
  if (fitRatio >= 1.0) {
    fitRatio = 1.0
  } else {
    // Beri sedikit margin 5% agar pas dan tidak mepet tepi layar
    fitRatio = Number((fitRatio * 0.95).toFixed(2))
    fitRatio = Math.max(fitRatio, 0.25)
  }

  const computedScale = fitRatio
  initialFitScale.value = computedScale
  scale.value = computedScale
  translateX.value = 0
  translateY.value = 0
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isOpen.value = false
  svgHtml.value = ''
  document.body.style.overflow = ''
}

// Kontrol Zoom (+, -, Reset)
function zoomIn() {
  scale.value = Number((scale.value + 0.2).toFixed(2))
}

function zoomOut() {
  scale.value = Math.max(Number((scale.value - 0.2).toFixed(2)), 0.3)
}

function resetZoom() {
  scale.value = initialFitScale.value
  translateX.value = 0
  translateY.value = 0
}

// Mouse Wheel Zoom
function handleWheel(e: WheelEvent) {
  e.preventDefault()
  const delta = e.deltaY < 0 ? 0.12 : -0.12
  const newScale = Number((scale.value + delta).toFixed(2))
  if (newScale >= 0.25 && newScale <= 4.0) {
    scale.value = newScale
  }
}

// Drag & Pan
function handleMouseDown(e: MouseEvent) {
  if (e.button !== 0) return
  isDragging.value = true
  startX.value = e.clientX - translateX.value
  startY.value = e.clientY - translateY.value
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  translateX.value = e.clientX - startX.value
  translateY.value = e.clientY - startY.value
}

function handleMouseUp() {
  isDragging.value = false
}

// Touch support untuk Tablet / HP
function handleTouchStart(e: TouchEvent) {
  if (e.touches.length === 1) {
    isDragging.value = true
    startX.value = e.touches[0].clientX - translateX.value
    startY.value = e.touches[0].clientY - translateY.value
  }
}

function handleTouchMove(e: TouchEvent) {
  if (!isDragging.value || e.touches.length !== 1) return
  translateX.value = e.touches[0].clientX - startX.value
  translateY.value = e.touches[0].clientY - startY.value
}

function handleTouchEnd() {
  isDragging.value = false
}

// Keyboard shortcuts (Escape untuk keluar, +, -, 0)
function handleKeyDown(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
}

watch(() => route.path, () => {
  setTimeout(attachMermaidListeners, 400)
})

onMounted(() => {
  setTimeout(attachMermaidListeners, 500)
  const observer = new MutationObserver(() => {
    attachMermaidListeners()
  })
  observer.observe(document.body, { childList: true, subtree: true })
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="mermaid-zoom-overlay"
      @click.self="closeModal"
    >
      <!-- Header Info Modal -->
      <div class="mermaid-zoom-header">
        <div class="zoom-title">
          <svg class="header-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span><strong>Tampilan Diagram Alur</strong></span>
          <span class="zoom-tip">(Scroll roda mouse untuk Zoom, Klik & Geser untuk memindahkan)</span>
        </div>
        <button class="btn-close" @click="closeModal" title="Tutup (Esc)">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Stage Canvas Area -->
      <div
        ref="containerRef"
        class="mermaid-zoom-stage"
        @wheel="handleWheel"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          class="mermaid-zoom-canvas"
          :style="{
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }"
        >
          <div class="mermaid-svg-card" v-html="svgHtml" />
        </div>
      </div>

      <!-- Floating Toolbar Bawah -->
      <div class="mermaid-zoom-toolbar">
        <button class="tool-btn" @click="zoomIn" title="Perbesar (+)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Zoom In</span>
        </button>
        <span class="scale-text">{{ Math.round(scale * 100) }}%</span>
        <button class="tool-btn" @click="zoomOut" title="Perkecil (-)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Zoom Out</span>
        </button>
        <button class="tool-btn" @click="resetZoom" title="Pas Layar / Reset (0)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M8 16H3v5"></path>
          </svg>
          <span>Pas Layar</span>
        </button>
        <button class="tool-btn btn-close-tool" @click="closeModal" title="Tutup (Esc)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span>Tutup</span>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mermaid-zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  user-select: none;
}

.mermaid-zoom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: rgba(30, 41, 59, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

.zoom-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
}

.zoom-tip {
  color: #94a3b8;
  font-size: 13px;
}

.btn-close {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.btn-close:hover {
  background: #ef4444;
  border-color: #ef4444;
}

.mermaid-zoom-stage {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.mermaid-zoom-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;
  transition: transform 0.05s ease-out;
  padding: 40px;
}

.mermaid-svg-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 32px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  display: inline-block;
}

.mermaid-svg-card svg {
  display: block;
}

.mermaid-zoom-toolbar {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8px 18px;
  border-radius: 9999px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.tool-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f8fafc;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s;
}

.tool-btn:hover {
  background: rgba(59, 130, 246, 0.85);
  border-color: rgba(59, 130, 246, 0.85);
}

.tool-btn.btn-close-tool:hover {
  background: rgba(239, 68, 68, 0.85);
  border-color: rgba(239, 68, 68, 0.85);
}

.scale-text {
  color: #38bdf8;
  font-weight: 600;
  font-size: 13px;
  min-width: 48px;
  text-align: center;
}

@media (max-width: 640px) {
  .zoom-tip {
    display: none;
  }
  .mermaid-zoom-toolbar {
    bottom: 16px;
    gap: 6px;
    padding: 6px 12px;
  }
  .tool-btn {
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>
