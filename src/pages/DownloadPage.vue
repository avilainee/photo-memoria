<template>
  <q-page class="flex flex-center">
    <div class="row justify-center">
      <div ref="captureArea" class="col-5">
        <q-card class="q-pb-xl q-px-md q-pt-md bg-white">
          <div class="q-gutter-xs">
            <div v-for="(image, index) in capturedImages" :key="index" class="col-6">
              <img v-if="image" :src="image" class="image-container mirrored" />
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-btn color="primary" label="Download as PNG" unelevated no-caps @click="downloadImage" />
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import html2canvas from 'html2canvas'

const route = useRoute()
const capturedImages = ref([])
const captureArea = ref(null)

onMounted(() => {
  if (route.query.images) {
    capturedImages.value = JSON.parse(route.query.images)
  }
})

const downloadImage = () => {
  if (!captureArea.value) return

  html2canvas(captureArea.value)
    .then((canvas) => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'captured-images.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
    .catch((err) => {
      console.error('Error capturing image:', err)
    })
}
</script>

<style>
.image-container {
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.mirrored {
  transform: scaleX(-1);
}
</style>
