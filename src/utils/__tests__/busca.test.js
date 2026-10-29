import { describe, it, expect } from 'vitest'
import { filtrarProdutos } from '../busca'

const produtos = [
    { id: '1', nome: 'Vestido Midi Fluido' },
    { id: '9', nome: 'Bolsa Tote de Couro'},
    { id: '10', nome: 'Óculos de Sol Vintage Ca-Eye'},
]

describe('filtrarProdutos', () => {

    it('filtra pelo nome sem diferenciar maiúsculas de minúsculas', () => {
        const resultado = filtrarProdutos(produtos, 'BOLSA')
        expect(resultado).toHaveLength(1)
        expect(resultado[0].id).toBe('9')
    })

    it('ignora acentos e espaços nas pontas', () => {
        expect(filtrarProdutos(produtos, ' oculos ')).toHaveLength(1)
    })

    it('devolve a lista inteira quando o termo está vazio', () => {
        expect(filtrarProdutos(produtos, '')).toEqual(produtos)
    })

    //caminho triste
    it('devolve lista vazia quando nenhum produto corresponde', () => {
        expect(filtrarProdutos(produtos, 'sapato')).toEqual([])
    })

    //caminho triste
    it('devolve lista vazia quando os produtos não são um array', () => {
        expect(filtrarProdutos(undefined, 'bolsa')).toEqual([])
    })
})