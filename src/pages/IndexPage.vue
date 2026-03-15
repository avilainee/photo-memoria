<template>
  <q-page>
    <div class="rxWorld">
      <section class="rnOuter">
        <section class="aoTable">
          <div class="aoTableCell">
            <section class="row justify-center">
              <div class="col q-pa-xs-md q-pa-sm-sm q-px-md-lg q-py-md-md">
                <div class="logo-container q-pa-md mobile-hide">
                  <img :src="logoSvg" :size="'md'" alt="Strip 4 shots" />
                </div>
                <div class="text-h1 text-weight-bold text-center">PHOTO<br />MEMORIA</div>
                <div class="text-h5 text-italic text-center q-pt-xs">
                  Memories Made, Photos Taken.
                </div>
                <div class="row justify-center q-pt-xl">
                  <q-btn
                    label="Let's take a photo!"
                    :to="{ path: '/frame' }"
                    :size="'lg'"
                    class="text-weight-bold text-primary bg-safe button-xs"
                    unelevated
                    no-caps
                  />
                </div>
              </div>
            </section>
          </div>
        </section>

        <div class="rnInner">
          <div class="rnUnit"></div>
          <!--  
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!--
        -->
          <div class="rnUnit"></div>
          <!---->
        </div>
      </section>
    </div>
  </q-page>
</template>
<script setup>
import logoSvg from 'src/assets/logo-safe.svg'

</script>
<style>
.rnOuter {
  background: #49111c;
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.rnInner {
  width: 100%;
  position: absolute;
  top: -10%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transform-style: preserve-3d;
  transition: transform 6s ease;
  transform-origin: -120% top;
}

.rnUnit {
  width: 100vw;
  height: 120vh;
  background: repeating-linear-gradient(to left, #5c1b27 4vw, #2f0a12 8vw, #7a2e3a 10vw);

  background-size: 100% 100%;
  display: inline-block;
  transform-origin: 0 0%;
  transform: rotate(2deg);
  animation: rnUnit 5s ease infinite;
}

@keyframes rnUnit {
  50% {
    transform: rotate(-3deg);
  }
}

.rnUnit:nth-child(1) {
  animation-delay: -0.1s;
}
.rnUnit:nth-child(2) {
  animation-delay: -0.2s;
}
.rnUnit:nth-child(3) {
  animation-delay: -0.3s;
}
.rnUnit:nth-child(4) {
  animation-delay: -0.4s;
}
.rnUnit:nth-child(5) {
  animation-delay: -0.5s;
}
.rnUnit:nth-child(6) {
  animation-delay: -0.6s;
}
.rnUnit:nth-child(7) {
  animation-delay: -0.7s;
}
.rnUnit:nth-child(8) {
  animation-delay: -0.8s;
}
.rnUnit:nth-child(9) {
  animation-delay: -0.9s;
}
.rnUnit:nth-child(10) {
  animation-delay: -1s;
}

.aoTable {
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
}

.aoTableCell {
  color: #7a2e3a;
  display: table-cell;
  vertical-align: middle;
  transition: color 3s ease;
}

.rnOuter:hover .rnInner {
  transform-origin: -120% top;
  transform: scaleX(0);
}

.rnOuter:hover .aoTableCell {
  color: white;
}
.logo-container {
  width: auto;
  height: auto;
}
.logo-container img {
  width: auto;
  height: 70px;
}
</style>
