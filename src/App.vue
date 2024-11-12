<script setup>
import Partie1 from './components/Partie1.vue'
import Partie2 from './components/Partie2.vue'
import Partie3 from './components/Partie3.vue'
import Partie4 from './components/Partie4.vue'
</script>

<template>
  <main>
    <h1>Conditional display</h1>
    <Partie1 />
    <Partie2 />
    <Partie3 />
    <Partie4 />
  </main>
</template>

<style scoped>
main {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 40px;
}
</style>
