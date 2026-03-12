<template>
  <q-page class="row flex-center q-gutter-y-sm">
    <div class="col-9 justify-left">
      <div class="row text-h3 text-weight-bold text-left">Choose a frame:</div>

      <div class="row flex-center q-gutter-x-xl">
        <q-btn flat class="frame-container q-pa-md">
          <img :src="stripSvg" alt="Strip 4 shots" class="shadow-2" />
        </q-btn>

        <!--<div class="col-3 bg-green">.col</div>
      <div class="col-3 bg-red">.col</div>-->
      </div>

      <div class="row self-left q-pt-lg">
        <q-btn
          color="dark"
          :to="{ path: '/' }"
          :size="'lg'"
          class="text-weight-regular q-mr-lg"
          unelevated
          no-caps
        >
          <q-icon left name="arrow_left" /> Back
        </q-btn>
        <q-space />
        <q-btn
          color="primary"
          :to="{ path: '/capture' }"
          :size="'lg'"
          class="text-weight-regular"
          unelevated
          no-caps
        >
          Next <q-icon right name="arrow_right" />
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import stripSvg from 'src/assets/strip_4shots.svg'
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
</style>
