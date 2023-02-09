<template>
  <main>
    <div class="container spd-5">
      <p class="instructions">
        Please enter a description of the image you want to generate.
      </p>
      <FormGenerateImage
        @generate-image-event="generateImageEvent"
        :loading="loading"
      />
      <AiGenerationResult
        :text-prompt="textPrompt"
        :ai-type="aiType"
        :loading="loading"
        :image="image"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue"
import { textToImage } from "../helpers/apiCalls"
import FormGenerateImage from "../components/FormGenerateImage.vue"
import AiGenerationResult from "../components/AiGenerationResult.vue"

//state
const image = reactive({
  deepAiURL: "",
  openAiURL: "",
  placeholder: true,
})

const textPrompt = ref("")
const aiType = ref("")
const loading = ref(false)

//methods
async function generateImageEvent(options) {
  aiType.value = options.aiType
  textPrompt.value = options.textPrompt
  loading.value = !loading.value
  image.placeholder = true

  image.deepAiURL = ""
  image.openAiURL = ""

  textToImage(textPrompt.value).then((response) => {
    const imageResult = response.data.output_url
    switch (aiType.value) {
      case "DeepAI":
        image.deepAiURL = imageResult
        break
      case "OpenAI":
        image.openAiURL = imageResult
        break
      case "Compare Both":
        image.deepAiURL = imageResult
        image.openAiURL = imageResult
        break
    }

    image.placeholder = false
    loading.value = !loading.value
  })
}
</script>

<style scoped>
p {
  color: white;
}

.instructions {
  text-align: center;
}
</style>
