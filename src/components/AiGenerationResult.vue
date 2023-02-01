<template>
  <div class="result">
    <Transition name="slide-fade" mode="out-in">
      <BaseLoadingRoller v-if="props.loading" />
      <div v-else>
        <h2 v-if="!props.image.placeholder">
          Text Prompt: "{{ props.textPrompt }}"
        </h2>
        <div class="image-result-wrapper">
          <div v-if="props.image.deepAiURL" class="image-wrapper">
            <h3>DeepAI Result</h3>
            <img
              :src="props.image.deepAiURL"
              :alt="`DeepAI Image generated from prompt: ${props.textPrompt}`"
            />
          </div>
          <div v-if="props.image.openAiURL" class="image-wrapper">
            <h3>OpenAI Result</h3>
            <img
              :src="props.image.openAiURL"
              :alt="`OpenAI Image generated from prompt: ${props.textPrompt}`"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import BaseLoadingRoller from "./utility/BaseLoadingRoller.vue"

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
h2,
h3 {
  color: white;
}

.result {
  margin: 2rem 0 0;
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

.image-result-wrapper {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  justify-content: center;
}
</style>
