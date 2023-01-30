<template>
  <form class="generate-image-form">
    <input
      type="text"
      placeholder="digital Illustration of a bowl of soup that is also a portal to another dimension"
      class="generate-image-form__text-prompt"
    />
  </form>
</template>

<script setup></script>

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
}

.generate-image-form__text-prompt::placeholder {
  color: #2d2487;
  font-style: italic;
  text-align: center;
}
</style>
