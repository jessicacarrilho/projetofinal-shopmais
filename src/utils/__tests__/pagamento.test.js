import { describe, it, expect } from 'vitest'
import { todosDigitosIguais, cartaoTemDezesseisDigitos } from '../pagamento'


describe('todosDigitosIguais (regra antifraude)', () => {
    
    it('detecta cartão com todos os dígitos iguais (tentativa de golpe)', () => {
        expect(todosDigitosIguais('1111 1111 1111 1111')).toBe(true)
    })

    //caminho triste

    it('aceita cartão com dígitos diferentes', () => {
        expect(todosDigitosIguais('4111 1111 1111 1234')).toBe(false)
    })
})

describe('cartaoTemDezesseisDigitos', () => {

    it('aceita 16 digitos com espaços', () => {
        expect(cartaoTemDezesseisDigitos('4111 1111 1111 1234')).toBe(true)
    })

    //caminho triste

    it('recusa cartão com menos de 16 dígitos', () => {
        expect(cartaoTemDezesseisDigitos('4111 1111')).toBe(false)
    })
})
