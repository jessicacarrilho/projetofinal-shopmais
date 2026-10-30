import { createTheme } from '@mui/material/styles'

// Cria o tema do Material UI com as cores da ShopMais.
// Recebe o modo ("claro" ou "escuro") vindo do TemaContext,
// assim os componentes do MUI (Button, Badge, Alert...) acompanham o tema escolhido.
export function criarTema(modo) {
    const escuro = modo === 'escuro'

    return createTheme({
        palette: {
            mode: escuro ? 'dark' : 'light',
            primary: {
                main: '#ee5a24',
                dark: '#c9441a',
                contrastText: '#ffffff',
            },
            background: escuro
                ? { default: '#1c1715', paper: '#2a2320' }
                : { default: '#fbf7f4', paper: '#ffffff' },
        },
        shape: {
            borderRadius: 10,
        },
        typography: {
            fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            button: {
                textTransform: 'none', // botões sem CAIXA ALTA
                fontWeight: 600,
            },
        },
    })
}