import { useState, useEffect } from 'react'
import { buscarProduto } from '../services/produtosServices'


//

export function useProduto(id) {
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        buscarProduto(id)
        .then((dado) => setProduto(dado))
        .catch((erro) => {
            console.error(erro)
            setError('Não foi possível carregar o produto. Por favor, tente novamente mais tarde.')
        })
        .finally(() =>setLoading(false))
    }, [id])

    return { produto, loading, error }


}