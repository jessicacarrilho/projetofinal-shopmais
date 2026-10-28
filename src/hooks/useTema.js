//Custom Hook para ler e trocar o tema em qualquer componente

import { useContext } from 'react'
import { TemaContext } from '../contexts/TemaContext'

export function useTema() {
    const contexto = useContext(TemaContext)

    if (!contexto) {
        throw new Error('useTema deve ser usado dentro de um <TemaProvider>')
    }

    return contexto
}