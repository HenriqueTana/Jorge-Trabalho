# SiGeT - Sistema de Gerenciamento de Testes

## 📋 Sobre o Projeto

O SiGeT é um sistema desenvolvido para o MCTIC (Ministério da Ciência, Tecnologia e Inovações) para criação e gerenciamento de roteiros de teste estruturados, seguindo os padrões governamentais.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript reativo
- **Vue Router** - Roteamento de páginas
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Bundler e servidor de desenvolvimento

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **CORS** - Configuração para requisições cross-origin

## 📁 Estrutura do Projeto

```
siget-updated/
├── frontend/                 # Aplicação Vue.js
│   ├── src/
│   │   ├── views/           # Componentes de página
│   │   │   ├── AppSimple.vue      # Aplicação principal
│   │   │   ├── LoginScreenSimple.vue # Tela de login
│   │   │   └── TestView.vue       # Componente de teste
│   │   ├── router/          # Configuração de rotas
│   │   ├── assets/          # Recursos estáticos
│   │   └── main.js          # Ponto de entrada
│   ├── package.json         # Dependências do frontend
│   ├── vite.config.js       # Configuração do Vite
│   ├── tailwind.config.js   # Configuração do Tailwind
│   └── postcss.config.js    # Configuração do PostCSS
└── backend/                 # Servidor Node.js
    ├── server.js           # Servidor Express
    ├── package.json        # Dependências do backend
    └── .env               # Variáveis de ambiente
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd siget-updated
```

2. **Instale as dependências do frontend**
```bash
cd frontend
npm install
```

3. **Instale as dependências do backend**
```bash
cd ../backend
npm install
```

### Execução

1. **Inicie o backend**
```bash
cd backend
npm start
```
O servidor backend estará rodando em `http://localhost:5000`

2. **Inicie o frontend** (em outro terminal)
```bash
cd frontend
npm run dev
```
O frontend estará disponível em `http://localhost:3000`

## 🎯 Funcionalidades

### Sistema de Login
- **Perfis de usuário**: Analista de Teste, Gerente de Projeto, Administrador, Auditor de Qualidade
- **Autenticação simples** com usuário e senha
- **Interface responsiva** adaptada para desktop e mobile

### Criação de Roteiros de Teste
- **Identificação do Projeto**: Sigla, nome, versão, requisitante, gerente
- **Histórico de Revisões**: Controle de versões com data, descrição e autor
- **Escopo**: Definição de itens de teste, tipos e níveis de teste
- **Navegação por abas**: Interface organizada em seções
- **Formulários reativos**: Validação em tempo real

### Tipos de Teste Suportados
- Teste de função
- Teste de segurança
- Teste de volume
- Teste de usabilidade
- Teste de avaliação de desempenho
- Outros (personalizável)

### Níveis de Teste
- Testes unitários funcionais
- Testes de integração
- Testes de sistema
- Testes de configuração de portal

## 🎨 Interface

### Design System
- **Cores**: Paleta baseada no padrão governamental
- **Tipografia**: Fontes legíveis e acessíveis
- **Componentes**: Botões, formulários e cards padronizados
- **Responsividade**: Adaptação automática para diferentes telas

### Experiência do Usuário
- **Navegação intuitiva** entre seções
- **Feedback visual** para ações do usuário
- **Formulários organizados** com labels e placeholders claros
- **Botões de ação** bem posicionados

## 🔧 Configuração

### Tailwind CSS
O projeto utiliza Tailwind CSS para estilização. As configurações estão em:
- `frontend/tailwind.config.js`
- `frontend/postcss.config.js`

### Vue Router
As rotas estão configuradas em `frontend/src/router/index.js`

### Proxy de Desenvolvimento
O Vite está configurado para fazer proxy das requisições da API para o backend:
```javascript
// vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:5000'
  }
}
```

## 🧪 Testes

### Testes Realizados
- ✅ Login com diferentes perfis de usuário
- ✅ Navegação entre seções do roteiro
- ✅ Preenchimento de formulários
- ✅ Reatividade dos componentes Vue
- ✅ Responsividade da interface
- ✅ Integração frontend-backend

### Como Testar
1. Acesse `http://localhost:3000`
2. Faça login com qualquer usuário/senha
3. Selecione um perfil de acesso
4. Navegue pelas seções do roteiro
5. Preencha os campos disponíveis
6. Teste a funcionalidade de adicionar revisões

## 📝 Conversão React → Vue.js

### Principais Mudanças
- **Sintaxe de template**: JSX → Template Vue
- **Gerenciamento de estado**: useState → ref/reactive
- **Ciclo de vida**: useEffect → onMounted/watch
- **Eventos**: onClick → @click
- **Estilização**: className → class

### Componentes Convertidos
- `App.jsx` → `AppSimple.vue`
- `LoginScreen.jsx` → `LoginScreenSimple.vue`
- Mantidos estilos originais com Tailwind CSS

## 🚀 Deploy

### Produção
Para deploy em produção:

1. **Build do frontend**
```bash
cd frontend
npm run build
```

2. **Configurar servidor web** (nginx, Apache) para servir os arquivos estáticos
3. **Configurar backend** em servidor Node.js
4. **Configurar variáveis de ambiente** de produção

## 🤝 Contribuição

### Padrões de Código
- **Vue.js**: Composition API
- **CSS**: Tailwind CSS classes
- **JavaScript**: ES6+ features
- **Formatação**: Prettier + ESLint

### Estrutura de Commits
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o sistema:
- **Desenvolvido por**: Equipe de Desenvolvimento
- **Órgão**: MCTIC - Coordenação Geral de Sistemas
- **Versão**: 1.0.0
- **Data**: Setembro 2025

## 📄 Licença

Este projeto é propriedade do MCTIC e destina-se ao uso interno da instituição.

---

**SiGeT - Sistema de Gerenciamento de Testes**  
*Desenvolvido com Vue.js e Node.js para o MCTIC*

