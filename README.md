# 🚀 InnovaHub - Plataforma de Inovação Empresarial

![InnovaHub](https://img.shields.io/badge/InnovaHub-v1.0.0-blue.svg)
![.NET](https://img.shields.io/badge/.NET-8.0-purple.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)

## 📋 Sobre o Projeto

O **InnovaHub** é uma plataforma web moderna desenvolvida para facilitar a gestão e colaboração de ideias inovadoras dentro de organizações. A aplicação permite que funcionários submetam, acompanhem e avaliem ideias, promovendo uma cultura de inovação colaborativa.

### ✨ Principais Funcionalidades

- 🔐 **Sistema de Autenticação** - Login seguro e gestão de perfis
- 💡 **Submissão de Ideias** - Interface intuitiva para envio de propostas inovadoras
- 📊 **Dashboard Interativo** - Visualização de métricas e KPIs de inovação
- 🏆 **Sistema de Ranking** - Classificação de ideias e colaboradores
- 👤 **Gestão de Perfil** - Acompanhamento individual de contribuições
- 📈 **Analytics** - Gráficos e relatórios de desempenho
- 🎯 **Categorização** - Organização de ideias por departamentos e temas

## 🛠️ Tecnologias Utilizadas

### Backend
- **ASP.NET Core 8.0** - Framework web principal
- **C#** - Linguagem de programação
- **MVC Pattern** - Arquitetura Model-View-Controller

### Frontend
- **HTML5 & CSS3** - Estrutura e estilização
- **Bootstrap 5.3.0** - Framework CSS responsivo
- **JavaScript ES6+** - Interatividade e funcionalidades dinâmicas
- **jQuery 3.7.0** - Manipulação DOM e AJAX
- **Chart.js 4.3.0** - Gráficos e visualizações
- **Font Awesome 4.7.0** - Ícones

### Ferramentas de Desenvolvimento
- **Visual Studio Code** - Editor de código
- **npm** - Gerenciador de pacotes frontend
- **NuGet** - Gerenciador de pacotes .NET

## 📁 Estrutura do Projeto

```
InnovaAIProject/
├── Controllers/                 # Controladores MVC
│   ├── DashboardController.cs   # Dashboard e métricas
│   ├── EnviarIdeiaController.cs # Submissão de ideias
│   ├── LoginController.cs       # Autenticação
│   ├── ProfileController.cs     # Gestão de perfil
│   └── RankingController.cs     # Sistema de ranking
├── Views/                       # Views do MVC
│   ├── Dashboard/               # Páginas do dashboard
│   ├── EnviarIdeia/            # Páginas de submissão
│   ├── Login/                   # Páginas de autenticação
│   ├── Profile/                 # Páginas de perfil
│   ├── Ranking/                 # Páginas de ranking
│   └── Shared/                  # Layouts e componentes compartilhados
│       ├── _Layout.cshtml       # Layout principal
│       └── _EnviarIdeiaModal.cshtml # Modal de submissão
├── wwwroot/                     # Arquivos estáticos
│   ├── css/                     # Estilos CSS
│   ├── js/                      # Scripts JavaScript
│   ├── lib/                     # Bibliotecas frontend
│   └── assets/                  # Imagens e recursos
├── Program.cs                   # Configuração da aplicação
└── package.json                 # Dependências frontend
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (para gerenciamento de pacotes frontend)
- [Visual Studio Code](https://code.visualstudio.com/) ou [Visual Studio](https://visualstudio.microsoft.com/)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd InnovaAIProject/InnovaAIProject
   ```

2. **Instale as dependências .NET**
   ```bash
   dotnet restore
   ```

3. **Instale as dependências frontend**
   ```bash
   npm install
   ```

4. **Execute a aplicação**
   ```bash
   dotnet run
   ```

5. **Acesse a aplicação**
   ```
   https://localhost:7154
   ```

### Configuração de Desenvolvimento

Para desenvolvimento, a aplicação está configurada para:
- **HTTPS** habilitado por padrão
- **Hot Reload** para mudanças em tempo real
- **Rota padrão** direcionando para a página de login

## 🎨 Funcionalidades Detalhadas

### 🔐 Sistema de Login
- Interface moderna e responsiva
- Validação de formulários
- Redirecionamento automático após autenticação

### 💡 Submissão de Ideias
- **Modal interativo** para envio de ideias
- **Formulário completo** com:
  - Seleção de departamento/time
  - Descrição detalhada da ideia
  - Slider de complexidade
  - Campo para desafios identificados
- **Validação em tempo real**
- **Opção de salvar como rascunho**

### 📊 Dashboard
- **Métricas visuais** com gráficos interativos
- **KPIs principais**:
  - Total de ideias
  - Ideias aprovadas
  - Ideias em análise
  - Total de votos
- **Perfil do usuário** com estatísticas pessoais
- **Atividades recentes**
- **Ações rápidas** para navegação

### 🏆 Sistema de Ranking
- **Classificação de usuários** por contribuições
- **Métricas de engajamento**
- **Filtros e ordenação**
- **Interface responsiva**

### 👤 Gestão de Perfil
- **Informações pessoais**
- **Histórico de contribuições**
- **Estatísticas individuais**

## 🎯 Recursos Técnicos

### Responsividade
- **Design mobile-first**
- **Breakpoints otimizados** para diferentes dispositivos
- **Interface adaptativa**

### Performance
- **Carregamento otimizado** de recursos
- **Minificação** de CSS e JavaScript
- **Lazy loading** de componentes

### Acessibilidade
- **Semântica HTML** adequada
- **Contraste de cores** otimizado
- **Navegação por teclado**
- **Labels e ARIA** apropriados

### Segurança
- **HTTPS** obrigatório
- **Validação** client-side e server-side
- **Sanitização** de inputs

## 🔧 Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
dotnet run

# Compilar para produção
dotnet build --configuration Release

# Executar testes
dotnet test

# Restaurar dependências
dotnet restore

# Instalar dependências frontend
npm install
```

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1200px+)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Desenvolvedor Principal** - Implementação e arquitetura
- **UI/UX Designer** - Interface e experiência do usuário
- **Product Owner** - Requisitos e funcionalidades

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto:

- 📧 **Email**: suporte@innovahub.com
- 📱 **Telefone**: +55 (11) 9999-9999
- 💬 **Chat**: Disponível na plataforma

## 🔄 Versionamento

Utilizamos [SemVer](http://semver.org/) para versionamento. Para as versões disponíveis, veja as [tags neste repositório](https://github.com/seu-usuario/innovahub/tags).

### Histórico de Versões

- **v1.0.0** - Versão inicial com funcionalidades principais
  - Sistema de login
  - Dashboard interativo
  - Submissão de ideias
  - Sistema de ranking
  - Gestão de perfil

---

**InnovaHub** - Transformando ideias em inovação! 🚀✨
