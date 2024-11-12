<script setup>
import { ref } from 'vue'

const like = ref(true)
const likeYes = () => {
  like.value = false
}
const likeNo = () => {
  like.value = true
}
</script>
<template>
  <p v-if="like === true" @click="likeYes" class="green">
    <font-awesome-icon :icon="['fas', 'thumbs-up']" />
  </p>
  <br />
  <p v-if="like === false" @click="likeNo" class="red">
    <font-awesome-icon :icon="['fas', 'thumbs-down']" />
  </p>
</template>
<style scoped>
svg {
  font-size: 30px;
  margin-bottom: 20px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
