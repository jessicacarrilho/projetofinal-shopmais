import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Botao from "../atoms/Botao";
import Preco from "../atoms/Preco";
import { calcularSubtotal } from "../../utils/carrinho";
import { caminhoDaImagem } from "../../utils/imagem";
import { itemCarrinhoShape } from "../../utils/propTypes";
import styles from './ItemCarrinho.module.css'

function ItemCarrinho({ item, onAlterarQuantidade, onRemover}) {
    return (
        <li className={styles.item}>
            <img src={caminhoDaImagem(item.imagem)} alt={item.nome} className={styles.imagem} />

            <div className={styles.info}>
                <link to={`/produtos/${item.id}`} className={styles.nome}>{item.nome}</link>
                <p className={styles.unitario}>Preço Unitário: <Preco valor={item.preco} />
                </p>

                <div className= {styles.quantidade} role="group" aria-label={`Quantidade de ${item.nome}`}>
                <button
                type="button"
                className={styles.botaoQtd}
                onClick={() => onAlterarQuantidade(item.id, item.quantidade -1)}
                disabled={item.quantidade <= 1}
                aria-label={`Diminuir quantidade de ${item.nome}`}
                >
                    -
                </button>

                <span className={styles.valorQtd}>{item.quantidade}</span>

                <button
                type="button"
                className={styles.botaoQtd}
                onClick={() => onAlterarQuantidade(item.id, item.quantidade + 1)}
                disabled={item.quantidade >= item.estoque}
                aria-label={`Aumentar quantidade de ${item.nome}`}
                >
                    +

                </button>

                </div>

                {item.quantidade >= item.estoque && (
                    <p className={styles.aviso}>Quantidade máxima em estoque.</p>
                )}
        
            </div>

            <div className={styles.lateral}>
                <p className={styles.subtotal}>
                    <span>Subtotal</span>
                    <Preco valor={calcularSubtotal(item)} />
                </p>
                <Botao
                variante="perigo"
                tamanho="small"
                onClick={() => onRemover(item.id)}
                aria-label={`Remover ${item.nome} do carrinho`}>Remover
                </Botao>
            </div>

        </li>
    )
}

ItemCarrinho.propTypes = {
    item: itemCarrinhoShape.isRequired,
    onAlterarQuantidade: PropTypes.func.isRequired,
    onRemover: PropTypes.func.isRequired,
}

export default ItemCarrinho