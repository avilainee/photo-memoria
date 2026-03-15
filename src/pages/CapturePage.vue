<template>
  <q-page class="column flex-center">
    <div
      v-if="countdown != 3 && capturedImages.length != 4"
      class="text-h3 text-weight-bold text-left q-my-md text-uppercase text-dark"
    >
      LOOK AT THE CAMERA
    </div>
    <div
      v-if="capturedImages.length === 4"
      class="text-h3 text-weight-bold text-left q-my-md text-uppercase text-dark"
    >
      CHECK THE IMAGES!
    </div>
    <div class="row full-width justify-center q-px-xl">
      <div class="col-12 col-md-6 col-sm-8 q-mx-xl q-pt-sm flex justify-center">
        <video
          ref="camera"
          autoplay
          playsinline
          muted
          class="full-width camera-container mirrored"
        ></video>

        <canvas ref="canvas" style="display: none"></canvas>
        <div class="q-gutter-x-sm q-py-lg">
          <q-btn
            v-if="capturedImages.length === 0"
            color="dark"
            label="Back"
            :to="{ path: '/frame' }"
            class="q-px-lg button-xs"
            :size="'lg'"
            unelevated
            no-caps
          />
          <q-btn
            v-if="capturedImages.length === 0 || capturedImages.length === 4"
            color="primary"
            :label="capturedImages.length === 0 ? 'Let\'s take a photo!' : 'Retake all'"
            class="q-px-lg button-xs"
            :size="'lg'"
            no-caps
            @click="resetAndStartPhotoSequence"
          />
          <q-btn
            v-if="capturedImages.length === 4"
            color="dark"
            label="Proceed"
            class="q-px-lg button-xs"
            :size="'lg'"
            no-caps
            :to="{ path: '/selection', query: { images: JSON.stringify(capturedImages) } }"
          />
        </div>
      </div>
      <div v-if="countdown > 0" class="countdown">
        <q-card class="q-px-lg text-white round bg-countdown">{{ countdown }}</q-card>
      </div>
      <div v-if="capturedImages.length != 0" class="col-12 col-md-2 col-sm-8 q-pt-sm">
        <div class="row q-col-gutter-xs">
          <div
            v-for="(image, index) in capturedImages"
            :key="index"
            class="col-6 col-md-9 col-sm-6"
          >
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
      stream: null
    }
  },

  async mounted() {
    await this.startCamera()
  },

  methods: {
    async startCamera() {
      try {
        const video = this.$refs.camera

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: false
        })

        this.stream = stream
        video.srcObject = stream

        // IMPORTANT: wait for video to load (mobile fix)
        await new Promise((resolve) => {
          video.onloadedmetadata = () => {
            video.play()
            resolve()
          }
        })

      } catch (error) {
        console.error('Error accessing the camera:', error)
      }
    },

    async resetAndStartPhotoSequence() {
      this.capturedImages = []
      await this.$nextTick()
      await this.startPhotoSequence()
    },

    async startPhotoSequence() {
      for (let i = 0; i < 4; i++) {
        await this.startCountdown()
        await this.takePhoto()
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
      return new Promise((resolve) => {

        const video = this.$refs.camera
        const canvas = this.$refs.canvas

        // MOBILE FIX: ensure camera ready
        if (!video.videoWidth) {
          console.warn("Camera not ready yet")
          resolve()
          return
        }

        const context = canvas.getContext('2d')

        const aspectRatio = 16 / 9
        const width = video.videoWidth
        const height = video.videoHeight

        const drawHeight = Math.floor(width / aspectRatio)
        const offsetY = (height - drawHeight) / 2

        canvas.width = width
        canvas.height = drawHeight

        context.drawImage(
          video,
          0,
          offsetY,
          width,
          drawHeight,
          0,
          0,
          width,
          drawHeight
        )

        const image = canvas.toDataURL('image/png')
        this.capturedImages.push(image)

        resolve()
      })
    },

    setBackground(color) {
      this.backgroundColor = color
    },

    stopCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop())
      }
    }
  },

  beforeUnmount() {
    this.stopCamera()
  }
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
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.image-container {
  border: 4px solid #1d1d1d;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bg-countdown {
  border-radius: 60%;
  background-color: rgba(255, 255, 255, 0.8) !important;
  padding: 20px 55px;
  font-size: 5rem;
  font-weight: bold;
  color: #49111c !important;
}
</style>
