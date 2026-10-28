import { Link } from "react-router-dom";
import Botao from "../components/atoms/Botao";
import Mensagem from "../components/atoms/Mensagem";
import ItemCarrinho from "../components/molecules/ItemCarrinho";
import ResumoCompra from "../components/organisms/ResumoCompra";
import { useCarrinho } from '../hooks/useCarrinho'
import styles from './Carrinho.module.css'

//Pagina /carrinho.

function Carrinho() {
    const { itens, alterarQuantidade, removerItem, quantidadeTotal, valorTotal } = useCarrinho()

    if (itens.length === 0) {
        return (
            <section className={styles.pagina}>
                <h1 className={styles.titulo}>Meu carrinho</h1>
                <Mensagem tipo="vazio" texto="Seu carrinho está vazio.">
                    <Botao component={Link} to="/produtos">
                    Ver produtos
                    </Botao>
                </Mensagem>
            </section>
        )
    }

    return (
        <section className={styles.pagina}>
            <h1 className={styles.titulo}>Meu carrinho</h1>

            <div className={styles.layout}>
                <ul className={styles.lista}>
                    {itens.map((item) => (
                        <ItemCarrinho
                        key={item.id}
                        item={item}
                        onAlterarQuantidade={alterarQuantidade}
                        onRemover={removerItem}
                        />
                    ))}
                </ul>

                <aside className={styles.lateral}>
                    <ResumoCompra quantidadeTotal={quantidadeTotal} valorTotal={valorTotal}>
                        <Botao component={Link} to="/pagamento" tamanho="large" larguraTotal>
                        FinalizarCompra
                        </Botao>
                        <Link to="/produtos" className={styles.continuar}>
                        Continuar comprando
                        </Link>
                    </ResumoCompra>
                </aside>
            </div>
        </section>
    )
}

export default Carrinho