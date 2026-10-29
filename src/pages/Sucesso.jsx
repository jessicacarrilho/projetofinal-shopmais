import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Botao from "../components/atoms/Botao";
import { useCarrinho } from "../hooks/useCarrinho";
import { formatarMoeda } from "../utils/moeda";
import styles from './Resultado.module.css'

//Página /Sucesso: confirma a compra e limpa o carrinho.

function Sucesso() {
    const { state } = useLocation()
    const { limparCarrinho } = useCarrinho()
    
    useEffect(() => {
        if (state) {
            limparCarrinho()
        }
    }, [state, limparCarrinho])

    if (!state) {
        return <Navigate to="/produtos" replace />
    }

    return (
        <section className={styles.resultado}>
            <div className={`${styles.icone} ${styles.iconeSucesso}`} aria-hidden="true">
               ✓ 
            </div>
            <h1 className={styles.titulo}>Compra aprovada!</h1>
            <p className={styles.texto}>
                Obrigada, <strong>{state.titular}</strong>! Recebemos o pagamento de{' '}
                <strong>{formatarMoeda(state.valorPago)}</strong> ({state.quantidadePecas}{' '}
                {state.quantidadePecas === 1 ? 'peca' : 'peças'}) no cartão final <strong>{state.finalCartao}</strong>.
            </p>

            <Botao component={Link} to="/produtos" tamanho="large">
            Continuar comprando
            </Botao>
        </section>
    )

    }

    export default Sucesso