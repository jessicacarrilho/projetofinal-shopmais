import { describe, it, expect } from 'vitest'
import { adicionarProdutoAoCarrinho, calcularValorTotal } from '../carrinho'

const bota = { id: '8', nome: 'Bota Ankle Boot Couro', preco: 289, estoque: 2 }

describe('adicionarProdutoAoCarrinho', () => {

    it('adiciona um produto novo com quantidade 1', () => {
        const itens = adicionarProdutoAoCarrinho([], bota)
        expect(itens[0].quantidade).toBe(1)
    })

    //caminho triste

    it('não ultrapassa o estoque', () => {
        const itens = adicionarProdutoAoCarrinho([{ ...bota, quantidade: 2 }], bota)
        expect(itens[0]. quantidade).toBe(2)
    })

})

describe('calcularValorTotal', () => {
    it('soma preço x quantidade de todos os itens', () => {
        expect(calcularValorTotal([{ ...bota, quantidade: 2}])).toBe(578)
    })

    //caminho triste

    it('devolve 0 para carrinho vazio', () => {
        expect(calcularValorTotal([])).toBe(0)
    })
        
    })