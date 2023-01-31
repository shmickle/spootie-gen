<template>
  <main>
    <div class="container spd-5">
      <p class="instructions">
        Please enter a description of the image you want to generate.
      </p>
      <FormGenerateImage @generate-image-event="generateImageEvent" />
      <div class="result">
        <BaseLoadingRoller v-if="loading" />
        <div v-else>
          <p v-if="!image.placeholder">Text Prompt: "{{ textPrompt }}"</p>
          <img :src="image.url" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { textToImage } from "../helpers/apiCalls"
import { reactive, ref } from "vue"
import FormGenerateImage from "../components/FormGenerateImage.vue"
import BaseLoadingRoller from "../components/utility/BaseLoadingRoller.vue"

//state
const image = reactive({
  url: "https://via.placeholder.com/900x900",
  placeholder: true,
})

const loading = ref(false)

let textPrompt = ref(null)

function generateImageEvent(options) {
  // const aiType = options.aiType
  textPrompt.value = options.textPrompt

  loading.value = !loading.value
  image.placeholder = true

  textToImage(textPrompt.value).then((result) => {
    image.url = result
    image.placeholder = false
    loading.value = !loading.value
  })
}
</script>

<style scoped>
p {
  color: white;
}

.instructions,
.loading {
  text-align: center;
}

.result {
  margin: 5rem 0 0;
  text-align: center;
}

img {
  border-radius: 10px;
}
</style>
