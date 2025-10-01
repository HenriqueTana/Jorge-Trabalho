<template>
  <div class="min-h-screen bg-blue-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">SiGeT - Sistema de Roteiros de Teste</h1>
      <p class="text-gray-700 mb-4">Sistema funcionando com Vue.js!</p>
      <button 
        @click="showMessage = !showMessage"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {{ showMessage ? 'Ocultar' : 'Mostrar' }} Mensagem
      </button>
      <div v-if="showMessage" class="mt-4 p-4 bg-green-100 text-green-800 rounded">
        ✅ Vue.js está funcionando corretamente!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMessage = ref(false)
</script>

<style scoped>
/* Estilos específicos do componente */
</style>

