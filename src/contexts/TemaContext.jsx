// Context API do tema claro/escuro

import { createContext, useCallback, useEffect,useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { criarTema } from '../assets/tema'


export const TemaContext = createContext(null)
const CHAVE_STORAGE = 'shopmais:tema'

function lerTemaInicial() {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    if (salvo === 'claro' || salvo === 'escuro') {
        return salvo
    }

    const  prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefereEscuro ? 'escuro' : 'claro'

}

export function TemaProvider({children}) {
    const [tema, setTema] = useState(lerTemaInicial)

    useEffect(() => {
        document.documentElement.dataset.tema = tema
        localStorage.setItem(CHAVE_STORAGE, tema)
    }, [tema])

    const alternarTema = useCallback (() => {
        setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'))
    }, [])

    const temaMui = useMemo(() => criarTema(tema), [tema])
    return (
        <TemaContext.Provider value={{tema, alternarTema}}>
            <ThemeProvider theme={temaMui}>
                {children}
            </ThemeProvider>
        </TemaContext.Provider>
    )
}
