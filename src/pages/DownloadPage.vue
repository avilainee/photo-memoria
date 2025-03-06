<template>
  <q-page class="flex flex-center">
    <div class="blurred-bg"></div>
    <div class="q-gutter-y-md column">
    </div>
      
    <div>
      <div ref="captureArea" class="flex flex-center">
        <div class="capture-card bg-white">
          <div class="pic-grid">
            <div v-for="(pic, index) in capturedImages" :key="index" class="pic-item" style="height: 120px">
              <img v-if="pic" :src="pic" class="pic-container mirrored" style="height: inherit"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          color="dark"
          label="Return to Capture"
          class="q-mx-lg"
          :size="'lg'"
          no-caps
          :to="{ path: '/capture' }"
        />
        <q-btn
          color="amber-10"
          label="Download as JPG"
          class="q-mx-lg"
          :size="'lg'"
          unelevated
          no-caps
          @click="downloadImage"
        />
      </div>
    </div>
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

const downloadImage = async () => {
  if (!captureArea.value) return

  try {
    const canvas = await html2canvas(captureArea.value, { scale: 3 })

    // Convert canvas to JPG and download
    const imageLink = document.createElement('a')
    imageLink.href = canvas.toDataURL('image/jpeg', 0.95) // High-resolution JPG
    imageLink.download = 'captured-images.jpg'
    imageLink.click()
  } catch (err) {
    console.error('Error capturing pic:', err)
  }
}
</script>


<style>
.q-page {
  min-height: 100vh; /* Ensure full viewport height */
  position: relative;
  overflow: hidden;
}

.blurred-bg {
  position: absolute;
  width: 50%;
  height: 70%;
  background: radial-gradient(circle, rgb(255, 115, 0, 0.5), rgba(0, 0, 0, 0));
  filter: blur(100px);
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.capture-card {
  padding: 30px 10px 100px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
</style>
