<template>
  <q-page class="flex flex-center">
    <!--<div class="blurred-bg"></div>-->
    <div class="row justify-center">
      <div class="col q-ma-xl">
        <div class="text-h1 text-weight-bold text-center">PHOTO<br />MEMORIA</div>
        <div class="text-h5 text-italic text-center q-pt-xs">Memories Made, Photos Taken.</div>
        <!--<q-card unelevated>
          <img href=/photo-memoria/icons/logo-128x128.png>
        </q-card>-->
        <div class="row justify-center q-pt-xl">
          <q-btn
            color="primary"
            label="Let's take a photo!"
            :to="{ path: '/frame' }"
            :size="'lg'"
            class="text-weight-regular"
            unelevated
            no-caps
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
.blurred-bg {
  position: absolute;
  width: 50%;
  height: 70%;
  background: radial-gradient(circle, rgb(73, 17, 28, 1), rgba(0, 0, 0, 0));
  filter: blur(100px);
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
