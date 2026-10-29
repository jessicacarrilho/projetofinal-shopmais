//Regras de validação do cartão + schema do Zod para o formulário de pagamento.

import { z } from 'zod'

export function limparNumeroCartao(numero) {
    return String(numero ?? '').replace(/[\s-]/g, '')
}

export function cartaoTemDezesseisDigitos(numero) {
    return /^\d{16}$/.test(limparNumeroCartao(numero))
}

export function todosDigitosIguais(numero) {
    const digitos = limparNumeroCartao(numero)
    if (digitos === '') {
        return false
    }

    return digitos.split('').every((digito) => digito === digitos[0])
}

export function validadeEhValida(validade) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(String(validade ?? ''))
}

export function cvvEhValido(cvv) {
    return /^\d{3}$/.test(String(cvv ?? ''))
}

export function finalDoCartao(numero) {
    return limparNumeroCartao(numero).slice(-4)
}

export const pagamentoSchema = z.object({
    titular: z.string(). trim().min(1, 'Informe o nome do titular do cartão.'),
    numeroCartao: z. string(). refine(cartaoTemDezesseisDigitos, 'O cartão deve ter dezesseis dígitos.'),
    validade: z.string().refine(validadeEhValida, 'Use o formato MM/AA, com mês entre 01 e 12.'),
    cvv: z.string().refine(cvvEhValido, 'O CVV deve ter 3 dígitos.'),

})

