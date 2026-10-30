//Regras de negócio do carrinho de compras

export function adicionarProdutoAoCarrinho(itens, produto) {
    if (!produto || produto.estoque <= 0) {
        return itens
    }

    const itemExistente = itens.find((item) => item.id === produto.id)
    if (!itemExistente) {
        return [...itens, { ...produto, quantidade: 1}]
    }
    if (itemExistente.quantidade >= produto.estoque) {
        return itens 
    }
    return itens.map((item) => item.id === produto.id ? {
        ...item, quantidade: item.quantidade + 1 } : item)
}

export function limitarQuantidade(quantidade,estoque) {
    const numero = Math.floor(Number(quantidade))
    if (!Number.isFinite(numero) || numero < 1) {
        return 1
    }
    return Math.min(numero, estoque)
}

export function alterarQuantidadeDoItem(itens, id, novaQuantidade) {
    return itens.map((item) => item.id === id ? {
        ...item, quantidade: limitarQuantidade(novaQuantidade, item.estoque) } : item
    )
}

export function removerItemDoCarrinho(itens, id) {
    return itens.filter((item) => item.id !== id)
}

export function calcularSubtotal(item) {
    return item.preco * item.quantidade
}

export function calcularQuantidadeTotal(itens) {
    if (!Array.isArray(itens)) {
        return 0
    }
    return itens.reduce((total, item) => total + item.quantidade, 0)
}

export function calcularValorTotal(itens) {
    if (!Array.isArray(itens)) {
        return 0
    }
    const total = itens.reduce((soma,item) => soma + calcularSubtotal(item), 0)
    return Math.round(total * 100) / 100
}