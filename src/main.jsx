import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import { CarrinhoProvider } from './contexts/CarrinhoContext.jsx'
import { tema } from './assets/tema'
import './assets/global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={tema}>
    <CarrinhoProvider>
    <App />
    </CarrinhoProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
