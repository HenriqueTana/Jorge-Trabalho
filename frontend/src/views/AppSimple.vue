<template>
  <div>
    <!-- Se não estiver logado, mostrar tela de login -->
    <LoginScreenSimple v-if="!isLoggedIn" @login="handleLogin" />

    <!-- Se estiver logado, mostrar aplicação principal -->
    <div v-else class="min-h-screen bg-gray-100 flex flex-col">
      <header class="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">Roteiro de Testes</h1>
        <div class="flex items-center space-x-4">
          <span v-if="userInfo" class="text-gray-700">Bem-vindo, {{ userInfo.usuario }} ({{ userInfo.perfil }})</span>
          <button @click="handleLogout" class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Sair
          </button>
        </div>
      </header>

      <main class="flex-1 p-4">
        <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div class="flex border-b pb-4 mb-4">
            <nav class="flex space-x-4">
              <button
                v-for="section in sections"
                :key="section.id"
                :class="[
                  'px-4 py-2 rounded-md',
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
                @click="activeSection = section.id"
              >
                {{ section.title }}
              </button>
            </nav>
          </div>

          <div class="mt-6">
            <!-- Seção Identificação -->
            <div v-if="activeSection === 'identificacao'" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="siglaProjeto" class="block text-sm font-medium text-gray-700 mb-1">Sigla do Projeto *</label>
                  <input
                    id="siglaProjeto"
                    v-model="formData.siglaProjeto"
                    placeholder="Ex: SIST"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="nomeProjeto" class="block text-sm font-medium text-gray-700 mb-1">Nome do Projeto *</label>
                  <input
                    id="nomeProjeto"
                    v-model="formData.nomeProjeto"
                    placeholder="Ex: Sistema de Gestão"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="versao" class="block text-sm font-medium text-gray-700 mb-1">Versão</label>
                  <input
                    id="versao"
                    v-model="formData.versao"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="requisitante" class="block text-sm font-medium text-gray-700 mb-1">Nome do Requisitante *</label>
                  <input
                    id="requisitante"
                    v-model="formData.nomeRequisitante"
                    placeholder="Nome completo"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="gerente" class="block text-sm font-medium text-gray-700 mb-1">Gerente de Projetos *</label>
                  <input
                    id="gerente"
                    v-model="formData.gerenteProjetos"
                    placeholder="Nome completo"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  📄 Histórico de Revisões
                </h3>
                <div class="space-y-4">
                  <div v-for="(revisao, index) in formData.historicoRevisoes" :key="index" class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                    <input
                      placeholder="Versão"
                      v-model="revisao.versao"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      placeholder="Data"
                      v-model="revisao.data"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      placeholder="Descrição"
                      v-model="revisao.descricao"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div class="flex gap-2">
                      <input
                        placeholder="Autor"
                        v-model="revisao.autor"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        v-if="formData.historicoRevisoes.length > 1"
                        @click="removeArrayItem('historicoRevisoes', index)"
                        class="px-3 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <button
                    @click="addArrayItem('historicoRevisoes', { versao: '', data: '', descricao: '', autor: '' })"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    ➕ Adicionar Revisão
                  </button>
                </div>
              </div>
            </div>

            <!-- Seção Escopo -->
            <div v-else-if="activeSection === 'escopo'" class="space-y-6">
              <div>
                <label for="itensTesteTxt" class="block text-sm font-medium text-gray-700 mb-1">Itens de Teste</label>
                <textarea
                  id="itensTesteTxt"
                  v-model="formData.itensTesteTxt"
                  placeholder="Descreva os itens de teste que fazem parte do Roteiro de Testes..."
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4">Tipos de Teste</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="tipo in tiposTesteOptions" :key="tipo.key" class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      :id="tipo.key"
                      v-model="formData.tiposTeste[tipo.key]"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label :for="tipo.key" class="text-sm text-gray-700">{{ tipo.label }}</label>
                  </div>
                </div>
                <div v-if="formData.tiposTeste.outros" class="mt-4">
                  <input
                    placeholder="Especifique outros tipos de teste..."
                    v-model="formData.tiposTeste.outrosTexto"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold mb-4">Níveis de Teste</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="nivel in niveisTesteOptions" :key="nivel.key" class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      :id="nivel.key"
                      v-model="formData.niveisTesteTxt[nivel.key]"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label :for="nivel.key" class="text-sm text-gray-700">{{ nivel.label }}</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Outras seções simplificadas -->
            <div v-else class="text-center py-8 text-gray-500">
              <p>Seção "{{ sections.find(s => s.id === activeSection)?.title }}" em desenvolvimento</p>
            </div>
          </div>

          <div class="mt-8 flex justify-end space-x-4">
            <button class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
              📄 Exportar para PDF
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Salvar Roteiro
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import LoginScreenSimple from './LoginScreenSimple.vue'

const isLoggedIn = ref(false)
const userInfo = ref(null)
const activeSection = ref('identificacao')
const formData = reactive({
  siglaProjeto: '',
  nomeProjeto: '',
  versao: '1.0',
  nomeRequisitante: '',
  gerenteProjetos: '',
  itensTesteTxt: '',
  tiposTeste: {
    funcao: false,
    seguranca: false,
    volume: false,
    usabilidade: false,
    desempenho: false,
    outros: false,
    outrosTexto: ''
  },
  niveisTesteTxt: {
    unitarios: false,
    integracao: false,
    sistema: false,
    configuracao: false
  },
  historicoRevisoes: [{ versao: '1.0', data: '', descricao: '', autor: '' }],
  cenarios: [{ nome: '', descricao: '' }],
  casosTeste: [],
  anexos: [''],
  referencias: [''],
  aprovacoes: [{ participante: '', data: '' }]
})

const handleLogin = (credentials) => {
  userInfo.value = credentials
  isLoggedIn.value = true
}

const handleLogout = () => {
  isLoggedIn.value = false
  userInfo.value = null
}

const addArrayItem = (field, defaultItem) => {
  formData[field].push(defaultItem)
}

const removeArrayItem = (field, index) => {
  formData[field].splice(index, 1)
}

const sections = [
  { id: 'identificacao', title: 'Identificação do Projeto' },
  { id: 'escopo', title: 'Escopo' },
  { id: 'cenarios', title: 'Cenários Operacionais' },
  { id: 'casos-teste', title: 'Casos de Teste' },
  { id: 'anexos', title: 'Anexos e Referências' },
  { id: 'aprovacoes', title: 'Aprovações' }
]

const tiposTesteOptions = [
  { key: 'funcao', label: 'Teste de função' },
  { key: 'seguranca', label: 'Teste de segurança' },
  { key: 'volume', label: 'Teste de volume' },
  { key: 'usabilidade', label: 'Teste de usabilidade' },
  { key: 'desempenho', label: 'Teste de avaliação de desempenho' },
  { key: 'outros', label: 'Outros' }
]

const niveisTesteOptions = [
  { key: 'unitarios', label: 'Testes unitários funcionais' },
  { key: 'integracao', label: 'Testes de integração' },
  { key: 'sistema', label: 'Testes de sistema' },
  { key: 'configuracao', label: 'Testes de configuração de portal' }
]
</script>

<style scoped>
/* Adicione estilos específicos do componente aqui, se necessário */
</style>

