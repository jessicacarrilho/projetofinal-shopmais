import { useProdutos } from './hooks/useProdutos'
import { caminhoDaImagem} from './utils/imagem'
import { formatarMoeda } from './utils/moeda'
import { useCarrinho } from './hooks/useCarrinho'
  
  
function App() {
  const { produtos, loading, error} = useProdutos()
  const { itens, adicionarItem, removerItem, limparCarrinho, obterQuantidade, quantidadeTotal, valorTotal } = useCarrinho()
  
  return (
    <main>
      <h1>ShopMais - {produtos.length} produtos</h1>

      <p>
        <strong>Carrinho:</strong>
        {quantidadeTotal} peças - Total: {formatarMoeda(valorTotal)}
        {' '}<button onClick={limparCarrinho}>LimparCarrinho</button>
      </p>

      {loading && <p>Carregando produtos...</p>}
      {error && <p>{error}</p>}

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img src={caminhoDaImagem(produto.imagem)} alt={produto.nome} width="60" />
            {produto.nome} - {formatarMoeda(produto.preco)} - estoque: {produto.estoque}
            {' '}<button onClick={() => adicionarItem(produto)}>Adicionar</button>
            {' '}No carrinho: {obterQuantidade(produto.id)}
          </li>
        ))}
      </ul>

      <h2>Itens no carrinho</h2>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.nome} x {item.quantidade}
            {' '}<button onClick={() => removerItem(item.id)}>Remover</button>
            </li>
        ))}
      </ul>
    </main>
  )
}
export default App