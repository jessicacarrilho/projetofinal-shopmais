import PropTypes from "prop-types";
import { formatarMoeda } from '../../utils/moeda'
import styles from './Preco.module.css'

function Preco({ valor, tamanho = 'normal' }) {
    const classe = tamanho === 'grande' ? `${styles.preco} ${styles.grande}` : styles.preco

    return <span className={classe}>{formatarMoeda(valor)}</span>
}

Preco.propTypes = {
    valor: PropTypes.number.isRequired,
    tamanho: PropTypes.oneOf(['normal', 'grande']),
}

export default Preco