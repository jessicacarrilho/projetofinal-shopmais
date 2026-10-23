import { useProdutos } from './hooks/useProdutos'
import { caminhoDaImagem} from './utils/imagem'
import { formatarMoeda } from './utils/moeda'
  
  
function App() {
  const { produtos, loading, error} = useProdutos()
  
  return (
    <main>
      <h1>ShopMais - {produtos.length} produtos</h1>

      {loading && <p>Carregando produtos...</p>}
      {error && <p>{error}</p>}

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img src={caminhoDaImagem(produto.imagem)} alt={produto.nome} width="60" />
            {produto.nome} - {formatarMoeda(produto.preco)}
          </li>
        ))}
      </ul>
    </main>
  )
}
export default App