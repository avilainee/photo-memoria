<template>
  <q-page class="column justify-start">
    <div class="column flex-center q-pt-xl-xs bg-safe printer">
      <div class="row text-h3 text-weight-bold text-left q-mt-xl text-uppercase text-dark">
        Print Out
      </div>
      <q-card dark bordered class="bg-dark q-px-md q-py-none text-dark shadow-4 text-caption"
        >______________________________________________
      </q-card>
    </div>
    <div class="flex flex-center q-pb-xl q-pt-md animate__animated animate__slideInDown">
      <div ref="captureArea" class="shadow-1">
        <div class="capture-card" :style="{ backgroundColor: colorSelected }">
          <div class="pic-grid">
            <div
              v-for="(pic, index) in capturedImages"
              :key="index"
              class="pic-item"
              style="height: 120px"
            >
              <img
                v-if="pic"
                :src="pic"
                crossorigin="anonymous"
                class="pic-container mirrored"
                :style="{ height: 'inherit', filter: filterSelected }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-center q-gutter-lg q-pb-mobile">
      <q-btn
        color="dark"
        class="button-xs q-px-sm"
        :size="'lg'"
        icon="home"
        round
        no-caps
        :to="{ path: '/' }"
      />
      <q-btn
        color="primary"
        label="Download as JPG"
        class="button-xs"
        :size="'lg'"
        unelevated
        no-caps
        @click="downloadImage"
      />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toJpeg } from 'html-to-image'  // ✅ modern replacement

const route = useRoute()
const capturedImages = ref([])
const captureArea = ref(null)
const colorSelected = ref(null)
const filterSelected = ref(null)

onMounted(() => {
  if (route.query.images) {
    capturedImages.value = JSON.parse(route.query.images)
    colorSelected.value = route.query.bg
    filterSelected.value = route.query.filter
  }
})

// helper to wait for images to fully load
const waitForImages = async (node) => {
  const images = node.querySelectorAll('img')
  await Promise.all([...images].map(img => {
    if (img.complete) return Promise.resolve()
    return new Promise(resolve => {
      img.onload = resolve
      img.onerror = resolve
    })
  }))
}

const downloadImage = async () => {
  const node = captureArea.value
  if (!node) return

  try {
    // wait for images to render (important for mobile)
    await waitForImages(node)

    const dataUrl = await toJpeg(node, {
      quality: 0.95,
      pixelRatio: 3  // replaces the old scale transform
    })

    const link = document.createElement('a')
    link.href = dataUrl

    // fallback for mobile browsers
    if (typeof link.download === 'string') {
      link.download = 'photo-memoria.jpg'
      link.click()
    } else {
      window.open(dataUrl)
    }

  } catch (err) {
    console.error('Error capturing image:', err)
  }
}
</script>

<style>
.q-page {
  min-height: 100vh; /* Ensure full viewport height */
  position: relative;
  overflow: hidden;
}
.capture-card {
  padding: 30px 10px 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
.pic-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
.pic-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic-container {
  border: none;
  border-radius: 0px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
}
.mirrored {
  transform: scaleX(-1);
}
.animate__animated.animate__slideInDown {
  --animate-duration: 4s;
}
.printer {
  position: relative;
  z-index: 2;
}
</style>
