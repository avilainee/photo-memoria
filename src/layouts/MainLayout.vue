<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container class="fit-page">
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
</style>
