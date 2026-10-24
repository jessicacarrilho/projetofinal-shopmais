//Context API: deixando o carrinho de compras disponível para toda a aplicação

import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { 
    adicionarProdutoAoCarrinho,
    alterarQuantidadeDoItem,
    calcularValorTotal,
    calcularQuantidadeTotal,
    removerItemDoCarrinho,
} from '../utils/carrinho'

export const CarrinhoContext = createContext(null)

const CHAVE_STORAGE = 'shopmais:carrinho'

function lerCarrinhoSalvo() {
    try {
        const salvo = localStorage.getItem(CHAVE_STORAGE)
        return salvo ? JSON.parse(salvo) : []
    } catch {
        return []
    }
}

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState(lerCarrinhoSalvo)

    useEffect(() => {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(itens))
    }, [itens])

// UseCallback para memorizar as funções e evitar recriações desnecessárias, melhorando a performance do componente.
    const adicionarItem = useCallback((produto) => {
        setItens((anteriores) => adicionarProdutoAoCarrinho(anteriores, produto))
    }, [])

    const alterarQuantidade = useCallback((id, novaQuantidade) => {
        setItens((anteriores) => alterarQuantidadeDoItem(anteriores, id, novaQuantidade))
    }, [])

    const removerItem = useCallback((id) => {
        setItens((anteriores) => removerItemDoCarrinho(anteriores, id))
    }, [])

    const limparCarrinho = useCallback(() => {
        setItens([])
    }, [])

    const obterQuantidade = useCallback((id) => {
        const item = itens.find((item) => item.id === id)
        return item ? item.quantidade : 0
    }, [itens])

//useMemo para memorizar os valores calculados e evitar recalcular em cada renderização.
    const quantidadeTotal = useMemo(() => calcularQuantidadeTotal(itens), [itens])
    const valorTotal = useMemo(() => calcularValorTotal(itens), [itens])

    return (
        <CarrinhoContext.provider value={{
            itens,
            adicionarItem,
            alterarQuantidade,
            removerItem,
            limparCarrinho,
            obterQuantidade,
            quantidadeTotal,
            valorTotal,
        }}>
            {children}
        </CarrinhoContext.provider>
    )

}



