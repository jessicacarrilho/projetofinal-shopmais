import { describe, it, expect } from 'vitest'
import { formatarMoeda } from '../moeda'

//O formatador do navegador usa um espaço especial entre "R$" e o número.

const semEspacoEspecial = (texto) => texto.replace(/\s/g, ' ')

describe('formatarMoeda', () => {
    
    it('formata um valor em reais', () => {
        expect(semEspacoEspecial(formatarMoeda(189.9))).toBe('R$ 189,90')
    })

    it('usa ponto para separar o milhar', () => {
        expect(semEspacoEspecial(formatarMoeda(1234.5))).toBe('R$ 1.234,50')
    })

    //caminho triste

    it('devolve R$ 0,00 para valores inválidos', () => {
        expect(semEspacoEspecial(formatarMoeda(undefined))).toBe('R$ 0,00')
        expect(semEspacoEspecial(formatarMoeda('abc'))).toBe('R$ 0,00')
        expect(semEspacoEspecial(formatarMoeda(NaN))).toBe('R$ 0,00')
    })
})