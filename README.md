stádio Inteligente - Protótipo
🏟️ Descrição

O Estádio Inteligente é um protótipo de aplicação web interativa que simula o controle de um estádio moderno, oferecendo placar ao vivo, escalações, cartões, impedimentos e outras informações essenciais para acompanhar partidas em tempo real.

Este projeto foi desenvolvido utilizando React e TypeScript, com foco em interfaces dinâmicas e experiência em tempo real para usuários e administradores.

⚡ Funcionalidades

Placar ao vivo: Atualização dinâmica do resultado da partida.

Escalações: Exibição das equipes com nomes dos jogadores e posições.

Cartões: Registro de cartões amarelos e vermelhos em tempo real.

Impedimentos: Indicação de jogadas anuladas por impedimento.

Controle de partida: Início, pausa e finalização do jogo.

Interface responsiva: Compatível com diferentes dispositivos e telas.

🛠️ Tecnologias Utilizadas

React – Biblioteca para construção de interfaces dinâmicas.

TypeScript – Tipagem estática para maior robustez do código.

Vite – Ferramenta de build rápida e moderna para React.

CSS/SCSS – Estilização e layout da aplicação.

📦 Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/estadio-inteligente.git


Acesse a pasta do projeto:

cd estadio-inteligente


Instale as dependências:

npm install


Inicie a aplicação:

npm run dev


Abra no navegador em http://localhost:5173 (ou a porta indicada pelo Vite).

📈 Estrutura do Projeto
/src
  /components
    PlacarScreen.tsx       # Tela do placar ao vivo
    JogadoresScreen.tsx    # Escalações dos times
    ControleScreen.tsx     # Controle da partida (início, pausa, final)
  /contexts
    MatchContext.tsx       # Contexto de gerenciamento da partida
  App.tsx                  # Componente principal
  main.tsx                 # Entrada da aplicação
vite.config.ts             # Configuração do Vite
package.json               # Dependências e scripts

🎮 Como Usar

Abra a aplicação no navegador.

Acesse a tela de controle para iniciar a partida.

Atualize placar, cartões e impedimentos em tempo real.

Acompanhe as escalações e detalhes da partida na tela principal.

📌 Observações

Este projeto é um protótipo e não se conecta a bases de dados externas.

Todas as informações são atualizadas localmente em tempo real.

Pode ser facilmente integrado a sistemas mais complexos de gestão de estádio e transmissão de jogos.

🔗 Contato

Desenvolvedor: Kaique Rebonato
