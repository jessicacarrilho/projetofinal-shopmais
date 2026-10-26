import PropTypes from "prop-types";
import Button from '@mui/material/Button'


const VARIANTES ={
     principal: { variant: 'contained', color: 'primary' },
    secundario: { variant: 'outlined', color: 'primary' },
    perigo: { variant: 'text', color: 'error' },
}

function Botao({ variante = 'principal', tamanho = 'medium', larguraTotal = false, children, ...resto }) {
    return (
        <Button {...VARIANTES[variante]} size={tamanho} fullWidth={larguraTotal} {...resto}>
            {children}
        </Button>
        )}

Botao.propTypes = {
    variante: PropTypes.oneOf(['principal', 'secundario', 'perigo']),
    tamanho: PropTypes.oneOf(['small', 'medium', 'large']),
    larguraTotal: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Botao