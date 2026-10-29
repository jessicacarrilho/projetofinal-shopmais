//Rota privada: só deixa entrar se tiver pelo menos 1 item no carrinho.
//Se o carrinho estiver vazio, redireciona para /carrinho.

import { Navigate, Outlet } from "react-router-dom";
import { useCarrinho } from "../hooks/useCarrinho";

function RotaPrivada() {
    const { quantidadeTotal } = useCarrinho()

    if (quantidadeTotal === 0) {
        return <Navigate to="/carrinho" replace />
    }

    return <Outlet />
}

export default RotaPrivada