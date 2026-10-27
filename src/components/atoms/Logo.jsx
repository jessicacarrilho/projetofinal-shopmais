import { link } from 'react-router-dom'
import styles from './Logo.module.css'


//Link que leva para a vitrine.

function Logo() {
    return (
        <Link to="/produtos" className={styles.logo} aria-label="ShopMais - ir para a vitrine">
            <svg className={styles.icone} viewBox="0 0 64 64" aria-hidden="true">
                <path
                    d="M22 22 V17 a10 10 0 0 1 20 0 V22"
                    fill="none"
                    stroke="#c9441a"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path d="M10 22 H54 L50 58 H14 Z" fill="#ee5a24" />
                <path d="M32 30 V50 M22 40 H42" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <span className={styles.nome}>
                Shop<span className={styles.destaque}>Mais</span>
            </span>
        </Link>
    )
}

 export default Logo           