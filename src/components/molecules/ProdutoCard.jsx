import PropTypes from "prop-types";
import Botao from '../atoms/Botao'
import Preco from '../atoms/Preco'
import { caminhoDaImagem } from '../../utils/imagem'
import { produtoShape } from '../../utils/propTypes'
import styles from '.ProdutoCard.module.css'

//Card de um produto na vitrine

function ProdutoCard({ produto, quantidadeNoCarrinho = 0, onAdicionar }) {
    const esgotado = produto.estoque <= 0
    const limiteAtingido = !esgotado && quantidadeNoCarrinho >= produto.estoque

    let textoDoBotao = 'Adicionar ao carrinho'
    if (esgotado) {
        textoDoBotao = 'esgotado'
        } else if (limiteAtingido) {
            textoDoBotao = 'Limite do estoque'
        }

        return (
            <article className={styles.card}>
                <img src={caminhoDaImagem(produto.imagem)}
                alt={produto.nome}
                className={styles.imagem}
                loading="lazy" 
                />

                <div className={styles.conteudo}>
                    <p className={styles.categoria}>{produto.categoria}</p>
                    <h2 className={styles.nome}>{produto.nome}</h2>
                    <Preco valor={produto.preco} />

                    <Botao
                    larguraTotal
                    disabled={esgotado || limiteAtingido}
                    onClick={() => onAdicionar(produto)}
                    className={styles.botao}
                    >
                        {textoDoBotao}
                    </Botao>

                    {quantidadeNoCarrinho > 0 && (
                        <p className={styles.noCarrinho}>No carrinho: {quantidadeNoCarrinho}</p>
                    )}
                </div>
            </article>
        )
}

ProdutoCard.propTypes = {
    produto: produtoShape.isRequired,
    quantidadeNoCarrinho: PropTypes.number,
    onAdicionar: PropTypes.func.isRequired,
}

export default ProdutoCard