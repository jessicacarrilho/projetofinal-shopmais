import { Link } from 'react-router-dom'
import Botao from '../components/atoms/Botao'
import styles from './Resultado.module.css'

//Página 404: aparece em qualquer endereço que não existe

function NaoEncontrada() {
    return (
        <section className={styles.resultado}>
            <p className={styles.codigo}>404</p>
            <h1 className={styles.titulo}>Página não encontrada</h1>
            <p className={styles.texto}>Oendereço que você acessou não existe ou foi removido.</p>

            <Botao component={Link} to="/produtos" tamanho="large">Ir para os produtos
            </Botao>
        </section>
    )
}

export default NaoEncontrada