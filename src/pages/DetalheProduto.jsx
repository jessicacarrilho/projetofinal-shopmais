import { Link, useParams } from 'react-router-dom'
import Botao from '../components/atoms/Botao'
import Mensagem from '../components/atoms/Mensagem'
import Preco from '../components/atoms/Preco'
import { useProduto } from '../hooks/useProduto'
import { useCarrinho } from '../hooks/useCarrinho'
import { caminhoDaImagem } from '../utils/imagem'
import styles from './DetalheProduto.module.css'


//Página /produtos /:id (rota dinâmica)

function DetalheProduto() {
    const { id } = useParams()
    const { produto, loading, error } = useProduto(id)
    const { adicionarItem, obterQuantidade } = useCarrinho()

    if (loading) {
        return <Mensagem tipo="carregando" texto="Carregando produto..." />
    }

    if (error) {
        return (
        <Mensagem tipo="erro" texto={error}>
            <Link to="/produtos">Voltar para a vitrine</Link>
        </Mensagem>
        )
    }

    if (!produto) {
        return (
            <Mensagem tipo="vazio" texto="Produto não encontrado">
                <Botao component={Link} to="/produtos">Voltar para a vitrine</Botao>
            </Mensagem>
        )
    }

    const quantidadeNoCarrinho = obterQuantidade(produto.id)
    const esgotado = produto.estoque <= 0
    const limiteAtingido = !esgotado && quantidadeNoCarrinho >= produto.estoque

    return (
        <article className={styles.detalhe}>
            <Link to="/produtos" className={styles.voltar}>← Voltar para a vitrine</Link>

            <div className={styles.grade}>
                <img
                src={caminhoDaImagem(produto.imagem)}
                alt={produto.nome}
                className={styles.imagem} />

                <div className={styles.info}>
                    <p className={styles.categoria}>{produto.categoria}</p>
                    <h1 className={styles.nome}>{produto.nome}</h1>
                    <Preco valor={produto.preco} tamanho="grande" />
                    <p className={styles.descricao}>{produto.descricao}</p>

                    <p className={esgotado ? styles.semEstoque : styles.estoque}>
                        {esgotado ? 'Produto esgotado' : `${produto.estoque} em estoque`}
                    </p>

                    <Botao 
                    tamanho="large"
                    disabled={esgotado || limiteAtingido}
                    onClick={() => adicionarItem(produto)}>
                        {limiteAtingido ? 'Limite do estoque' : 'Adicionar ao Carrinho'}
                    </Botao>

                    {quantidadeNoCarrinho > 0 && (
                        <p className={styles.noCarrinho}>
                            {quantidadeNoCarrinho} no carrinho - <Link to="/carrinho">Ver carrinho</Link>
                        </p>
                    )}
                </div>
            </div>
        </article>
    )
}

export default DetalheProduto