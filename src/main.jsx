import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import App from './App.jsx'
import { CarrinhoProvider } from './contexts/CarrinhoContext.jsx'
import { TemaProvider } from './contexts/TemaContext.jsx'
import './assets/global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <TemaProvider>
    <CarrinhoProvider>
    <App />
    </CarrinhoProvider>
    </TemaProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
