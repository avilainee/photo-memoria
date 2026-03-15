<template>
  <q-page class="column justify-center q-pa-xl-xl q-py-mobile">
    <div class="row flex-center q-gutter-x-xl">
      <div class="column flex-center q-pb-xl q-pt-md">
        <div ref="captureArea" class="shadow-1">
          <div class="capture-card" :style="{ backgroundColor: colorSelected }">
            <div class="pic-grid">
              <div
                v-for="(pic, index) in capturedImages"
                :key="index"
                class="pic-item"
              >
                <img
                  v-if="pic"
                  :src="pic"
                  class="pic-container mirrored"
                  :style="{ filter: filterSelected }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column flex-center q-pt-md">
        <div class="text-h5 text-weight-bold text-center q-pb-lg">BACKGROUND:</div>
        <q-btn-toggle
          v-model="colorSelected"
          flat
          dense
          no-ripple
          color="safe"
          class="no-shadow q-gutter-x-md q-pb-lg colorOptions"
          :ripple="false"
          :options="[
            { value: '#49111C', slot: 'one' },
            { value: '#212121', slot: 'two' },
            { value: '#A9927D', slot: 'three' },
            { value: '#F2F4F3', slot: 'four' },
          ]"
        >
          <template v-slot:one>
            <div :class="['q-pa-xs', { 'color-selected': colorSelected === '#49111C' }]">
              <q-avatar color="primary" class="shadow-2" />
            </div>
          </template>

          <template v-slot:two>
            <div :class="['q-pa-xs', { 'color-selected': colorSelected === '#212121' }]">
              <q-avatar color="dark" class="shadow-2" />
            </div>
          </template>

          <template v-slot:three>
            <div :class="['q-pa-xs', { 'color-selected': colorSelected === '#A9927D' }]">
              <q-avatar color="accent" class="shadow-2" />
            </div>
          </template>

          <template v-slot:four>
            <div :class="['q-pa-xs', { 'color-selected': colorSelected === '#F2F4F3' }]">
              <q-avatar color="white" class="shadow-2" />
            </div>
          </template>
        </q-btn-toggle>
        <div class="text-h5 text-weight-bold text-center q-pb-lg">FILTER:</div>
        <q-btn-toggle
          v-model="filterSelected"
          flat
          dense
          no-ripple
          color="safe"
          class="no-shadow q-gutter-x-sm colorOptions"
          :ripple="false"
          :options="[
            { value: 'none', slot: 'one' },
            { value: 'grayscale(100%) contrast(120%)', slot: 'two' },
          ]"
        >
          <template v-slot:one>
            <q-btn outline rounded color="primary" label="Original" />
          </template>

          <template v-slot:two>
            <q-btn outline rounded color="primary" label="B&W" />
          </template>
        </q-btn-toggle>
        <q-btn-toggle
          v-model="filterSelected"
          flat
          dense
          no-ripple
          color="safe"
          class="no-shadow q-gutter-x-sm q-pb-lg colorOptions"
          :ripple="false"
          :options="[,
            {
              value: 'sepia(70%) contrast(120%) saturate(110%) brightness(105%) hue-rotate(-10deg)',
              slot: 'three',
            },
            { value: 'saturate(2)', slot: 'four' },
          ]"
        >
          <template v-slot:three>
            <q-btn outline rounded color="primary" label="Sepia" />
          </template>

          <template v-slot:four>
            <q-btn outline rounded color="primary" label="Saturate" />
          </template>
        </q-btn-toggle>
      </div>
    </div>
    <div class="row justify-around">
      <q-btn
        color="dark"
        label="Return to Capture"
        class="q-mt-md button-xs"
        :size="'lg'"
        no-caps
        :to="{ path: '/capture' }"
      />
      <q-btn
        color="primary"
        label="Print Image"
        class="q-mt-md button-xs"
        :size="'lg'"
        unelevated
        no-caps
        :to="{
          path: '/download',
          query: { images: JSON.stringify(capturedImages), bg: colorSelected, filter: filterSelected },
        }"
      />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const capturedImages = ref([])
const colorSelected = ref('#F2F4F3')
const filterSelected = ref('none')

onMounted(() => {
  if (route.query.images) {
    capturedImages.value = JSON.parse(route.query.images)
  }
})
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
  height: 120px;
  width: 215px;
  overflow: hidden;
}

.pic-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.color-selected {
  border: 2px solid #000;
  border-radius: 100%;
}
body .colorOptions .q-focusable:focus > .q-focus-helper {
  background: transparent !important;
  box-shadow: none !important;
}
body .colorOptions .q-hoverable:hover > .q-focus-helper {
  background: transparent !important;
}
body .colorOptions .q-hoverable:hover {
  background: #00000034 !important;
  border-radius: 100% !important;
}
</style>
