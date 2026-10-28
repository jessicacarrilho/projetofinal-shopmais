import PropTypes from "prop-types";
import Preco from "../atoms/Preco";
import styles from './ResumoCompra.module.css'

//Caixa com resumo da compra (peças, frete e total)

function ResumoCompra({ quantidadeTotal, valorTotal, children }) {
    return (
        <section className={styles.resumo} aria-labelledby="titulo-resumo">
            <h2 id="titulo-resumo" className={styles.titulo}>Resumo da compra</h2>

            <dl className={styles.linhas}>
                <div className={styles.linha}>
                    <dt>Peças</dt>
                    <dd>{quantidadeTotal}</dd>
                </div>

                <div className={styles.linha}>
                    <dt>Frete</dt>
                    <dd className={styles.gratis}>Grátis</dd>
                </div>

                <div className={`${styles.linha} ${styles.total}`}>
                    <dt>Total</dt>
                    <dd>
                        <Preco valor={valorTotal} tamanho="grande" />
                    </dd>
                </div>
            </dl>

            {children}

        </section>
    )
}

ResumoCompra.propTypes = {
    quantidadeTotal: PropTypes.number.isRequired,
    valorTotal: PropTypes.number.isRequired,
    children: PropTypes.node,
}

export default ResumoCompra