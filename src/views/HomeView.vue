<template>
  <main>
    <div class="container spd-5">
      <p class="instructions">
        Please enter a description of the image you want to generate.
      </p>
      <GenerateImageForm @generate-image-event="getGenerateImageEvent" />
      <p v-if="loading">Loading...</p>
      <div class="result">
        <img v-if="!loading" :src="image.url" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { textToImage } from "../helpers/apiCalls"
import { reactive, ref } from "vue"
import GenerateImageForm from "../components/GenerateImageForm.vue"

//state
const image = reactive({
  url: "https://via.placeholder.com/900x900",
  placeholder: true,
})

const loading = ref(false)

function getGenerateImageEvent(options) {
  // const aiType = options.aiType
  const textPrompt = options.textPrompt

  loading.value = !loading.value

  textToImage(textPrompt).then((result) => {
    image.url = result
    loading.value = !loading.value
  })
}
</script>

<style scoped>
.instructions {
  color: white;
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
