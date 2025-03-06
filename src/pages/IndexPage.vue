<template>
  <q-page>
    <div class="blurred-bg"></div>
    <div class="row">
      <div class="col q-ma-xl">
        <q-card unelevated>
          <q-card-section> WALA PANG WELCOME HAHAHA </q-card-section>
        </q-card>
        <q-btn color="dark" label="Let's take a photo!" class="q-ma-xl" :to="{ path: '/capture' }" unelevated no-caps />
      </div>
    </div>
  </q-page>
</template>
<script>

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
</style>
