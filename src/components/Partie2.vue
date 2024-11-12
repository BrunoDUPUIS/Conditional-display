<script setup>
import { ref } from 'vue'

const like = ref(true)
</script>
<template>
  <font-awesome-icon
    :icon="['fas', 'thumbs-up']"
    v-show="like"
    @click="like = false"
    class="green"
  />

  <font-awesome-icon
    :icon="['fas', 'thumbs-down']"
    v-show="!like"
    @click="like = true"
    class="red"
  />
</template>
<style scoped>
svg {
  font-size: 30px;
  margin-bottom: 40px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
