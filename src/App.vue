<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup>
import { RouterView } from "vue-router"
import TheHeader from "./components/layout/TheHeader.vue"
import TheFooter from "./components/layout/TheFooter.vue"
</script>

<style lang="scss" scoped></style>
