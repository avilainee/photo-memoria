<template>
  <q-page class="flex flex-center">
    <div class="blurred-bg"></div>
    <div class="row full-width justify-center q-pa-xl">
      <div class="col-12 col-md-6 col-sm-8 q-mx-xl flex justify-center">
        <video ref="camera" autoplay class="full-width camera-container mirrored"></video>
        <canvas ref="canvas" style="display: none"></canvas>
        <q-btn
          v-if="capturedImages.length === 0 || capturedImages.length === 4"
          color="amber-10"
          :label="capturedImages.length === 0 ? 'Let\'s take a photo!' : 'Retake all'"
          class="q-my-xl q-px-lg"
          :size="'lg'"
          no-caps
          @click="resetAndStartPhotoSequence"
        />
        <q-btn
          v-if="capturedImages.length === 4"
          color="dark"
          label="Next"
          class="q-my-xl q-ml-lg q-px-lg"
          :size="'lg'"
          no-caps
          :to="{ path: '/download', query: { images: JSON.stringify(capturedImages) } }"
        />
      </div>
      <div v-if="countdown > 0" class="countdown">
        <q-card class="q-px-lg text-amber-10">{{ countdown }}</q-card>
      </div>
      <div class="col-12 col-md-2 col-sm-8">
        <div class="row q-col-gutter-sm">
          <div v-for="(image, index) in capturedImages" :key="index" class="col-6 col-md-9 col-sm-6">
            <img v-if="image" :src="image" class="image-container mirrored" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      countdown: 0,
      capturedImages: [],
    }
  },
  mounted() {
    this.startCamera()
  },
  methods: {
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        this.$refs.camera.srcObject = stream
      } catch (error) {
        console.error('Error accessing the camera:', error)
      }
    },
    async resetAndStartPhotoSequence() {
      this.capturedImages = []
      await this.$nextTick() // Ensure capturedImages is reset before starting
      this.startPhotoSequence()
    },
    async startPhotoSequence() {
      for (let i = 0; i < 4; i++) {
        await this.startCountdown()
        this.takePhoto()
      }
    },
    startCountdown() {
      return new Promise((resolve) => {
        this.countdown = 3
        const interval = setInterval(() => {
          this.countdown--
          if (this.countdown === 0) {
            clearInterval(interval)
            resolve()
          }
        }, 1000)
      })
    },
    takePhoto() {
      const video = this.$refs.camera
      const canvas = this.$refs.canvas
      const context = canvas.getContext('2d')

      const aspectRatio = 16 / 9
      const width = video.videoWidth
      const height = video.videoHeight

      const drawHeight = Math.floor(width / aspectRatio)
      const offsetY = (height - drawHeight) / 2

      canvas.width = width
      canvas.height = drawHeight
      context.drawImage(video, 0, offsetY, width, drawHeight, 0, 0, width, drawHeight)

      this.capturedImages.push(canvas.toDataURL('image/png'))
    },
    setBackground(color) {
      this.backgroundColor = color
    },
  },
}
</script>

<style>
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

video {
  object-fit: cover;
}

.mirrored {
  transform: scaleX(-1);
}

.camera-container {
  border: 4px solid #1d1d1d;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.image-container {
  border: 4px solid #1d1d1d;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #1976d2;
  font-weight: bold;
}
</style>
