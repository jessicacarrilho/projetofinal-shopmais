import { apiGet} from './api'

export function listarProdutos() {
    return apiGet('produtos')
}

export function buscarProduto(id) {
    return apiGet(`produtos/${id}`)
}