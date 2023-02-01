<template>
  <div class="result">
    <Transition name="slide-fade" mode="out-in">
      <BaseLoadingRoller v-if="props.loading" />
      <div v-else>
        <p v-if="!props.image.placeholder">
          Text Prompt: "{{ props.textPrompt }}"
        </p>
        <img v-if="props.image.url" :src="props.image.url" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import BaseLoadingRoller from "../components/utility/BaseLoadingRoller.vue"

//props
const props = defineProps({
  textPrompt: {
    type: String,
    required: true,
  },
  aiType: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
p {
  color: white;
}
.result {
  margin: 5rem 0 0;
  text-align: center;
}

img {
  border-radius: 10px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
