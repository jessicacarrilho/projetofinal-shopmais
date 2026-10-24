//Hook para usar o contexto do carrinho de compras em qualquer componente da aplicação.

import { useContext } from 'react'
import { CarrinhoContext } from '../contexts/CarrinhoContext'

export function useCarrinho() {
    const contexto = useContext(CarrinhoContext)

    if (!contexto) {
        throw new Error('useCarrinho deve ser usado dentro de um <CarrinhoProvider>')
    }

    return contexto
}