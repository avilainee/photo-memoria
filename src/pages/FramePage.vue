<template>
  <q-page class="row flex-center q-gutter-y-sm">
    <div class="col-9 justify-left">
      <div class="row text-h3 text-weight-bold text-left">Choose a frame:</div>
      <div class="row flex-center q-gutter-x-xl">
        <q-btn-toggle
          v-model="frameOptions"
          spread
          toggle-color="primary"
          color="safe"
          class="no-shadow"
          :options="[{ value: 'one', slot: 'one' }]"
        >
          <template v-slot:one>
            <div class="frame-container q-pa-md frame-selected">
              <img :src="stripSvg" alt="Strip 4 shots" class="shadow-2" />
            </div>
          </template>
        </q-btn-toggle>
      </div>
      <div class="row justify-end">
        <div class="logo-container q-pa-md mobile-hide">
          <img :src="logoSvg" :size="'md'" alt="Strip 4 shots" />
        </div>
        <q-space class="mobile-hide"/>
        <div class="row justify-end q-pt-lg">
          <q-btn
            color="dark"
            :to="{ path: '/' }"
            :size="'lg'"
            label="Back"
            class="text-weight-regular q-mr-sm button-xs"
            unelevated
            no-caps
          />

          <q-btn
            color="primary"
            :to="{ path: '/capture' }"
            :size="'lg'"
            label="Next"
            class="text-weight-regular button-xs"
            unelevated
            no-caps
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import stripSvg from 'src/assets/strip_4shots.svg'
import logoSvg from 'src/assets/full_logo.svg'

const frameOptions = ref(null)
</script>

<style scoped>
.frame-container {
  width: auto;
  margin: auto;
}
.frame-container img {
  width: auto;
  height: 65vh;
}
.logo-container {
  width: auto;
  height: auto;
}
.logo-container img {
  width: auto;
  height: 50px;
}
</style>
