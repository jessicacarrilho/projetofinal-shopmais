import { Link, useNavigate } from "react-router-dom";
import Botao from "../components/atoms/Botao";
import styles from './Resultado.module.css'

//Pagina /falha: pagamento recusado pela regra antifraude
// O carrinho não é limpo: os itens continuam lá para tentar de novo

function Falha() {
    const Navigate = useNavigate()

    return (
        <section className={styles.resultado}>
            <div className={`${styles.icone} ${styles.iconeFalha}`} aria-hidden="true">
                !
            </div>
            <h1 className={styles.titulo}>Pagamento recusado</h1>
            <p className={styles.motivo} role="alert">
                tentativa de golpe
            </p>

            <p className={styles.texto}>
                Seus itens continuam no carrinho. Confira os dados do cartão e tente novamente.
            </p>

            <div className={styles.acoes}>
                <Botao tamanho="large" onClick={() => Navigate('/pagamento')}>
                    Tentar novamente
                </Botao>
                <Botao component={Link} to="/carrinho" variante="secundario" tamanho="large">
                Ver carrinho
                </Botao>
            </div>
        </section>
    )
}

export default Falha