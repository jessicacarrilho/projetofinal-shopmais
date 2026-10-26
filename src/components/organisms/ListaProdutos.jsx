import PropTypes from 'prop-types';
import ProdutoCard from '../molecules/ProdutoCard'
import { useCarrinho } from '../../hooks/useCarrinho'
import { produtoShape } from '../../utils/propTypes'
import styles from './ListaProdutos.module.css'


//Grade de produtos: faz o map da lista criando um ProdutoCard para cada item


function ListaProdutos({ produtos }) {
    const { adicionarItem, obterQuantidade } = useCarrinho()
    return (
        <ul className={styles.grade}>
            {produtos.map((produto) => (
                <li key={produto.id}>
                    <ProdutoCard
                    produto={produto}
                    quantidadeNoCarrinho={obterQuantidade(produto.id)}
                    onAdicionar={adicionarItem}
                    />
                </li>
            ))}
        </ul>
    )
}

ListaProdutos.propTypes = {
    produtos: PropTypes.arrayOf(produtoShape).isRequired,
}

export default ListaProdutos