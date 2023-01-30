<template>
  <main>
    <div class="container spd-5">
      <p class="instructions">
        Please enter a description of the image you want to generate.
      </p>
      <GenerateImageForm />
      <div class="result">
        <img :src="image.placeholder ? image.url : image.url" />
      </div>
    </div>
  </main>
</template>

<script setup>
import GenerateImageForm from "../components/GenerateImageForm.vue"

const image = {
  url: "https://via.placeholder.com/900x900",
  placeholder: true,
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
