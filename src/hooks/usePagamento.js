//Hook personalizado com a lógica do pagamento simulado.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "./useCarrinho";
import { finalDoCartao, todosDigitosIguais } from '../utils/pagamento'

function esperar(milissegundos) {
    return new Promise((resolve) => setTimeout(resolve, milissegundos))
}

export function usePagamento() {
    const navigate = useNavigate()
    const { valorTotal, quantidadeTotal } = useCarrinho()
    const [processando, setProcessando] = useState(false)

    async function finalizarCompra(dados) {
        setProcessando(true)

        await esperar(2000)

        if (todosDigitosIguais(dados.numeroCartao)) {
            setProcessando(false)
            navigate('/falha')
            return
        }

        setProcessando(false)
        navigate('/sucesso', {
            state: {
                titular: dados.titular.trim(),
                finalCartao: finalDoCartao(dados.numeroCartao),
                valorPago: valorTotal,
                quantidadePecas: quantidadeTotal,
            },
        })
    }

    return { processando, finalizarCompra}
}