<script setup>
import { ref } from 'vue'

const initialValue = ref(0)

const addOne = () => {
  initialValue.value = initialValue.value + 1
}
const addFive = () => {
  initialValue.value = initialValue.value + 5
}
const raz = () => {
  initialValue.value = 0
}
</script>
<template>
  <div>
    <p v-if="initialValue === 0">😱 Mon porte monnaie est vide</p>
    <p v-else-if="initialValue === 1">Mon premier euro 🤩</p>
    <p v-else-if="initialValue > 30">🍾 Ca y est je suis riche !! 🍾</p>
    <p v-else-if="initialValue > 10">Yes, plus de 10 €</p>
  </div>
  <br />
  <div>
    <p>{{ initialValue }} €</p>
  </div>
  <br />
  <div class="button">
    <button @click="addOne">Ajouter 1€</button>
    <button @click="raz">Remettre à zéro</button>
    <button @click="addFive">Ajouter 5€</button>
  </div>
</template>
<style scoped>
p {
  font-weight: bold;
}

div > button {
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 5px;
  background-color: white;
}
.button {
  display: flex;
  gap: 20px;
}
</style>
