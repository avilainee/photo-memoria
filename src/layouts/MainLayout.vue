<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container class="fit-page bg-safe">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>

</script>

<style>
.fit-page {
  overflow: hidden !important; /* disable scrolling */
}
.bg-safe{
  background-color: #F2F4F3;
}
</style>
