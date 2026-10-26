import PropTypes from 'prop-types'
import styles from './CampoBusca.module.css'

function CampoBusca({ valor, onMudar, ref }) {
    return (
        <div className={styles.campo} role="search">
            <label htmlFor="busca-produtos" className={styles.rotulo}>Buscar produtos</label>
            <input 
            ref={ref}
            id="busca-produtos"
            type="search"
            className={styles.entrada}
            placeholder="Ex.: vestido, bolsa, tênis..."
            value={valor}
            onChange={(evento) => onMudar(evento.target.value)}
            autoComplete="off"
            />
        </div>
    )
}

CampoBusca.PropTypes = {
    valor: PropTypes.string.isRequired,
    onMudar: PropTypes.func.isRequired,
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

}

export default CampoBusca