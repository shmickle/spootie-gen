<template>
  <button @click="countTwo++">{{ count }}</button>
  <div>{{ store.name }}</div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "../stores/store"

defineProps(["count"])

const store = useStore()

const countTwo = ref(0)
</script>

<style lang="scss" scoped></style>
