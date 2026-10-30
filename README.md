# 🛍️ ShopMais - Moda Feminina

Loja virtual de moda feminina feita em **React + Vite**. É a evolução do mini-projeto de checkout para uma loja completa: vitrine com busca, detalhe do produto, carrinho compartilhado entre as páginas e pagamento simulado.

> Projeto Final - Front-End React SCTEC, MÓDULO 2.

---

**Aplicação publicada** |
**Trello** |
**Vídeo de apresentação** | 

---

## Qual problema resolve

No mini-projeto, o cliente só conseguia pagar um carrinho fixo. Agora a ShopMais permite **navegar pelo catálogo, buscar produtos, ver os detalhes de cada peça e montar o próprio carrinho** antes de pagar - o ciclo completo de um e-commerce: **vitrine-> busca-> detalhe-> carrinho-> pagamento**.

## Funcionalidades

-**Catálogo** com 12 produtos em 3 categorias (roupas, calçados e acessórios), vindo de uma APIsimulada com `json-server`.

-Mensagens de **carregando**, **erro** e **lista vazia**.

-**Busca em tempo real** pelo nome, sem diferenciar maiúsculas de minúsculas (e ignorando acentos), com botão **limpar busca**.

-**Detalhe do produto** em rota dinâmica (`/produtos/:id`), com tratamento de **"Produto não encontrado"**.

-**Carrinho com context API**: adicionar, aumentar/diminuir (mínimo 1, máximo = estoque), remover, subtotais e total.

-**Contador no Header** (Badge do Material UI), atualizado em todas as páginas.

-**Pagamento** com React Hook Form + Zod e o aviso **"Processando compra..."** com o botão desabilitado.

-**Regra antifraude**: cartão com todos os dígitos iguais-> `/falha` com a mensagem **"tentativa de golpe"** (o carrinho é mantido). Os demais cartões-> `/sucesso` (o carrinho é limpo).

-**Rota privada**: `/pagamento` só abre com os itens no carrinho.

-**Página 404** para qualquer endereço inexistente.

-**Layout responsivo (mobile-first)**: 1 coluna no celular, 2 no tablet e 4 no desktop.

-**Tema claro/escuro** com `TemaContext` (a escolha fica salva) e **carrinho persistente** no `localStorage.`

## Tecnologias

| Tecnologias | Uso no projeto |

- React 19 + Vite 8 | SPA e ambiente de desenvolvimento |
- React Router Dom 7 | Rota de layout com `Outlet`, rota dinâmica, rota privada e 404 |
- Context API + custom hooks | `CarrinhoContext` + `useCarrinho`, `TemaContext` + `useTema`, `useProdutos`, `useProdutos`, `usePagamento` |
- `useMemo`/`useCallback` | Lista filtrada, totais do carrinho e funções dos contextos |
- `useRef` | Foco automático no campo de busca |
- React Hook Form + Zod | Formulário de pagamento validado |
- PropTypes | Validação das props dos componentes |
- Material UI | `Button` (átomo `Botao`), `Badge`, `TextField`, `Alert`, `CircularProgress` |
- CSS Modules | Estilo isolado por componente (`*.module.css`) |
- json-server | API REST simulada a partir do `db.json` |
- Vitest | Testes das regras de negócio |
- ESLint | Padrão de código |
- Netlify | Deploy |

## Como executar

Pré-requisito: **Node.js 20 ou mais novo**.

# 1. Instalar as dependências 
 - npm install

# 2. Em um terminal: subir a API simulada (http://localhost:3001)
 - npm run api

# 3. Em outro terminal: subir a aplicação (http://localhost:5173)
 - npm run dev


 ### Scripts

 | Comando | O que faz |

 | `npm run dev` | Inicia a aplicação |
 | `npm run api` | Inicia o json-server com o `db.json` na porta 3001 |
 | `npm test` | Executa os testes |
 | `npm run lint` | Analisa o código com o ESLint |
 | `npm run build` | Gera a versão de produção na pasta `dist` |
 | `npm run preview` | Abre a versão de produção localmente |


 ### Cartões para testar o pagamento (dados fictícios)

 | Cartão | Validade | CVV | Resultado |

 | `4111 1111 1111 1234` | `12/28` | `123` | ✅Compra aprovada-> `/sucesso`|
 | `1111 1111 1111 1111` | `12/28` | `123` | ❌"tentativa de golpe"-> `/falha`|

 ## API local x site publicado (variáveis de ambiente)

 O json-server só roda no computador. por isso, o site publicado lê os produtos direto do `db.json`. Quem decide isso é a variável `VITE_USAR_API`, lida em `src/services/api.js`.


 | Arquivo | `VITE_USAR_API` | De onde vêm os produtos |

 | `.env.development`(`npm run dev`) | `true` | json-server em `http://localhost:3001` |
 | `env.production`(`npm run build`) | `false` | `db.json` empacotado do build |


 ## Rotas 

 | Rota | Página | Observação |

 | `/` | - | Redireciona para `/produtos` |
 | `/produtos` | `Produtos` | Lista da API + busca |
 | `/produtos/:id` | `DetalheProduto` | Rota dinâmica (`useParams´) |
 | `/carrinho` | `Carrinho` | Itens do `CarrinhoContext` |
 | `/pagamento` | `Pagamento` | Rota privada (precisa de itens no carrinho) |
 | `/sucesso` | `Sucesso` | Confirma a compra e limpa o carrinho |
 | `/falha` | `Falha` | "tentativa de golpe + "Tentar novamente" |
 | `*` | `NaoEncontrada` | Página 404 |


 ## Estrutura de pastas (Atomic Design)

 projetofinal-shopmais/
├── db.json                 # produtos da API simulada
├── netlify.toml            # build + redirecionamento SPA na Netlify
├── public/
│   ├── favicon.svg
│   └── _redirects          # SPA: as rotas não quebram ao recarregar
└── src/
    ├── main.jsx            # TemaProvider + CarrinhoProvider
    ├── App.jsx             # BrowserRouter e mapa de rotas
    ├── assets/             # imagens dos produtos, estilos globais e tema do MUI
    ├── components/
    │   ├── atoms/          # Botao, Preco, CampoBusca, Mensagem, Logo
    │   ├── molecules/      # ProdutoCard, ItemCarrinho
    │   ├── organisms/      # Header, Footer, ListaProdutos, ResumoCompra
    │   └── templates/      # Layout (Header + Outlet + Footer)
    ├── pages/              # Produtos, DetalheProduto, Carrinho, Pagamento,
    │                       # Sucesso, Falha, NaoEncontrada
    ├── routes/             # RotaPrivada
    ├── contexts/           # CarrinhoContext, TemaContext
    ├── hooks/              # useCarrinho, useProdutos, useProduto, usePagamento, useTema
    ├── services/           # api.js (apiGet genérico) e produtosServices.js
    └── utils/              # regras de negócio: moeda, busca, carrinho, pagamento,
        └── __tests__/      #   imagem, propTypes + testes



## Testes 

npm test

- 16 testes em 4 arquivos, todos passando, com **caminho feliz e caminho triste**:

| Arquivo | O que testa |

| `moeda.test.js` | `formatarMoeda`: valor válido e valor inválido |
| `busca.test.js` | `filtrarProdutos`: maiúsculas, acentos, termo vazio e sem resultados |
| `carrinho.test.js` | adicionar, limite de estoque e total |
| `pagamento.test.js` | regra antifraude (`todosDigitosIguais`) e cartão com 16 dígitos |


## Git e organização

- `main` - versão final.
- `develop` - recebe os Pull Requests das funcionalidades.
- Uma branch `feature/*` por tarefa, criada a partir da `develop` e mesclada por **Pull Request**:

| Branch | Objetivo |

| `feature/api-produtos` | `db.json`, imagens, serviço de API e hooks de produtos |
| `feature/carrinho-context` | Regras do carrinho, `CarrinhoContext e useCarrinho` |
| `feature/listagem-busca` | Átomos, `ProdutoCard`, `ListaProdutos` e página de produtos com busca |
| `feature/layout-rotas` | `Logo`, `Header` com Badge, `Footer`, `Layout`, rotas e 404 |
| `feature/detalhe-produto` | Página `/produtos/:id` |
| `feature/tema` | Tema claro/escuro |
| `feature/pagina-carrinho` | `ItemCarrinho`, `ResumoCompra` e página `/carrinho` |
| `feature/pagamento` | Formulário, rota privada, sucesso e falha |
| `feature/testes` | Testes das regras de negócio |
| `feature/readme-deploy` | Documentação e configuração da Netlify |

As tarefas foram organizadas no Trello, com um cartão para cada branch.


## Melhorias futuras

- Filtro por categoria e ordenação por preço.
- Busca sincronizada com a URL.
- Máscara automática nos campos do cartão.
- Teste de componente com React Testing Library
- Back-end real e integração com um meio de pagamento.

## Autora

** Jéssica de Castro Vasconcelos carrilho** - aluna do curso Front-End React do SCTEC.






