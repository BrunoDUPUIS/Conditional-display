<script setup>
import { ref } from 'vue'

const isConnected = ref(false)
const func = () => {
  isConnected.value = true
}
</script>
<template>
  <div>
    <button v-if="isConnected === true" @click="isConnected = false">Se Déconnecter</button>
    <div v-else>
      <button @click="func">S'inscrire</button>
      <button @click="func">Se connecter</button>
    </div>
  </div>
</template>
<style scoped>
div {
  display: flex;
  gap: 10px;
}
button {
  color: green;
  border: 1px solid green;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 30px;
  padding: 10px;
}
</style>
