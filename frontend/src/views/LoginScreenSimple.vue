<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      <!-- Lado esquerdo - Informações do sistema -->
      <div class="space-y-8">
        <div class="text-center lg:text-left">
          <div class="mb-6">
            <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
              <span class="text-white text-2xl">📄</span>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-2">
              Sistema de Roteiros de Teste
            </h1>
            <p class="text-xl text-gray-600">
              MCTIC - Coordenação Geral de Sistemas
            </p>
          </div>
          
          <div class="space-y-4 text-gray-700">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-blue-600 text-sm">📄</span>
              </div>
              <div>
                <h3 class="font-semibold">Criação de Roteiros</h3>
                <p class="text-sm">Crie roteiros de teste estruturados seguindo os padrões do MCTIC</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-green-600 text-sm">👥</span>
              </div>
              <div>
                <h3 class="font-semibold">Colaboração</h3>
                <p class="text-sm">Trabalhe em equipe com aprovações e revisões integradas</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-purple-600 text-sm">🛡️</span>
              </div>
              <div>
                <h3 class="font-semibold">Conformidade</h3>
                <p class="text-sm">Garanta conformidade com normas e padrões governamentais</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lado direito - Formulário de login -->
      <div class="w-full max-w-md mx-auto">
        <div class="bg-white rounded-lg shadow-2xl p-6">
          <div class="text-center pb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Acesso ao Sistema
            </h2>
            <p class="text-gray-600">
              Entre com suas credenciais para continuar
            </p>
          </div>
          
          <div class="space-y-6">
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="space-y-2">
                <label for="usuario" class="block text-sm font-medium text-gray-700">Usuário</label>
                <div class="relative">
                  <span class="absolute left-3 top-3 text-gray-400">👤</span>
                  <input
                    id="usuario"
                    type="text"
                    placeholder="Digite seu usuário"
                    v-model="credentials.usuario"
                    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="senha" class="block text-sm font-medium text-gray-700">Senha</label>
                <div class="relative">
                  <span class="absolute left-3 top-3 text-gray-400">🔒</span>
                  <input
                    id="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    v-model="credentials.senha"
                    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <hr class="my-4" />

              <div class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Selecione seu perfil de acesso:</label>
                <div class="grid grid-cols-1 gap-2">
                  <label
                    v-for="perfil in perfis"
                    :key="perfil.id"
                    :class="[
                      'flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all',
                      credentials.perfil === perfil.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    ]"
                  >
                    <input
                      type="radio"
                      name="perfil"
                      :value="perfil.id"
                      v-model="credentials.perfil"
                      class="sr-only"
                    />
                    <span class="text-gray-600 mr-3">{{ perfil.icon }}</span>
                    <div class="flex-1">
                      <div class="font-medium text-sm">{{ perfil.nome }}</div>
                      <div class="text-xs text-gray-500">{{ perfil.desc }}</div>
                    </div>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                Entrar no Sistema
              </button>
            </form>

            <div class="text-center text-sm text-gray-500">
              <p>Sistema desenvolvido pela</p>
              <p class="font-semibold">Diretoria de Tecnologia da Informação - MCTIC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['login'])

const credentials = reactive({
  usuario: '',
  senha: '',
  perfil: 'analista'
})

const handleLogin = () => {
  // Simulação de login - em um sistema real, haveria validação no backend
  if (credentials.usuario && credentials.senha) {
    emit('login', credentials)
  }
}

const perfis = [
  { id: 'analista', nome: 'Analista de Teste', icon: '📄', desc: 'Criar e executar roteiros de teste' },
  { id: 'gerente', nome: 'Gerente de Projeto', icon: '👥', desc: 'Aprovar e gerenciar roteiros' },
  { id: 'admin', nome: 'Administrador', icon: '⚙️', desc: 'Configurações do sistema' },
  { id: 'auditor', nome: 'Auditor de Qualidade', icon: '🛡️', desc: 'Revisar e validar processos' }
]
</script>

<style scoped>
/* Adicione estilos específicos do componente aqui, se necessário */
</style>

