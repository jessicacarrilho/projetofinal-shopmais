import { createTheme } from "@mui/material/styles";

export const tema = createTheme({
    palette: {
        primary: {
            main: '#ee5a24',
            dark: '#c9441a',
            contrastText: '#ffffff',
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
})