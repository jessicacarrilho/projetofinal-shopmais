import styles from './Footer.module.css'

//Rodapé exibido em todas as páginas

function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <p>© {anoAtual} ShopMais - Moda feminina</p>
            <p className={styles.aviso}>Projeto final do curso Front-End React do SCTEC. Os pagamentos são apenas simulados.</p>
        </footer>
    )
}

export default Footer