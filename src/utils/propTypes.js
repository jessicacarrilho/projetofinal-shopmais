import PropTypes from 'prop-types'

export const produtoShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome:PropTypes.string.isRequired,
    descricao:PropTypes.string,
    preco:PropTypes.number.isRequired,
    categoria:PropTypes.string.isRequired,
    imagem:PropTypes.string.isRequired,
    estoque:PropTypes.number.isRequired,
})