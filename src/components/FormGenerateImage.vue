<template>
  <form class="generate-image-form" @submit.prevent="generateImage">
    <input
      type="text"
      placeholder="digital Illustration of a bowl of soup that is also a portal to another dimension"
      class="generate-image-form__text-prompt"
      v-model="optionSelected.textPrompt"
      required
    />
    <ul class="ai-options">
      <li>
        <input
          type="radio"
          value="DeepAI"
          name="generationOptions"
          id="deep-ai"
          v-model="optionSelected.aiType"
          checked
        />
        <label for="deep-ai" class="btn">DeepAI</label>
      </li>
      <li>
        <input
          type="radio"
          value="OpenAI"
          name="generationOptions"
          id="open-ai"
          v-model="optionSelected.aiType"
        />
        <label for="open-ai" class="btn">OpenAI</label>
      </li>
      <li>
        <input
          type="radio"
          value="Compare Both"
          name="generationOptions"
          id="compare-both"
          v-model="optionSelected.aiType"
        />
        <label for="compare-both" class="btn">Compare Both</label>
      </li>
      <button type="submit" class="btn btn--submit">Generate Images</button>
    </ul>
  </form>
</template>

<script setup>
import { reactive } from "vue"

//emits
const emit = defineEmits(["generateImageEvent"])

//state
const optionSelected = reactive({
  aiType: "",
  textPrompt: "",
})

//methods
function generateImage() {
  emit("generateImageEvent", optionSelected)
  optionSelected.textPrompt = ""
}
</script>

<style lang="scss" scoped>
.generate-image-form {
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
}

.generate-image-form__text-prompt {
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 10px;
  box-shadow: 6px 7px 0px #2a1f83;
  transition: 0.3s ease all;
}

.generate-image-form__text-prompt::placeholder {
  color: #2d2487;
  font-style: italic;
  text-align: center;
}

.generate-image-form__text-prompt:focus {
  box-shadow: none;
}

.ai-options {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
    justify-content: center;
    grid-gap: 0.5rem;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
}

.ai-options li {
  list-style-type: none;
}

.btn {
  display: inline-block;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: 3px solid #2d2487;
  transition: 0.3s ease all;
  color: white;
  font-weight: 700;
  cursor: pointer;
  min-width: 200px;
  text-align: center;
  font-size: 1rem;

  @media screen and (max-width: 900px) {
    min-width: 150px;
  }

  @media screen and (max-width: 768px) {
    min-width: 100px;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    background: #2d2487;
    color: white;
  }
}

input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
}

input[type="radio"]:focus + label,
input[type="radio"]:checked + label {
  background: #2d2487;
  color: white;
}

.btn--submit {
  background: white;
  color: #000;
  border-color: white;
}

.btn--submit:hover {
  border-color: #2d2487;
  background: #2d2487;
  color: white;
}
</style>
