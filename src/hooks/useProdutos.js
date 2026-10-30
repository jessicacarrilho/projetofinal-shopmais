import { useState, useEffect } from 'react'
import { listarProdutos } from '../services/produtosServices'

//Hook para buscar produtos da API e gerenciar estado de carregamento e erros
export function useProdutos() {
    const [produtos, setProdutos] =useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

//array de dependências vazio para que o useEffect seja executado apenas uma vez, quando o componente for montado
    useEffect(() => {
        listarProdutos()
        .then((dados) => setProdutos(dados))
        .catch((erro) => {
            console.error(erro)
            setError('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.')
        })   
        .finally(() => setLoading(false))      
    }, [])
    return { produtos, loading, error
    }
    }