import PropTypes from "prop-types";
import Alert from '@mui/material/Alert'
import CircularProgress from './Mensagem.module.css'
import styles from './Mensagem.module.css'

//Mensagens de estado da tela

function Mensagem({ tipo, texto, children }) {
    if (tipo === 'erro') {
        return (
            <div className={styles.mensagem}>
                <Alert severity="error">{texto}</Alert>
                {children}
            </div>
        )
    }

    return (
    <div className={styles.mensagem} role="status">
        {tipo === 'carregando' && <CircularProgress size={32} />}
        <p className={styles.texto}>{texto}</p>
        {children}
    </div>
    )   
}

Mensagem.propTypes={
    tipo: PropTypes.oneOf(['carregando', 'erro', 'vazio']).isRequired,
    texto: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Mensagem