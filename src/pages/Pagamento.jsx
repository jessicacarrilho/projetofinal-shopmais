import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Botao from '../components/atoms/Botao'
import ResumoCompra from '../components/organisms/ResumoCompra';
import { useCarrinho } from '../hooks/useCarrinho';
import { usePagamento } from '../hooks/usePagamento';
import { pagamentoSchema } from '../utils/pagamento';
import styles from './Pagamento.module.css'


// Pagina /pagamento.(rota privada)

function Pagamento() {
    const { quantidadeTotal, valorTotal } = useCarrinho()
    const { processando, finalizarCompra } = usePagamento()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(pagamentoSchema),
        mode: 'onTouched',
        defaultValues: { titular: '', numeroCartao: '', validade: '', cvv: ''},
    })

    function propsDoCampo(nome) {
        const { ref, ...resto } = register(nome)

        return {
            ...resto,
            inputRef: ref,
            error: Boolean(errors[nome]),
            helperText: errors[nome]?.message,
        }
    }

    return (
        <section className={styles.pagina}>
            <Link to={"/carrinho"} className={styles.voltar}>
            ← Voltar ao carrinho
            </Link>
            <h1 className={styles.titulo}>Pagamento</h1>

            <div className={styles.layout}>
                <form className={styles.formulario} onSubmit={handleSubmit(finalizarCompra)} noValidate>
                    <fieldset className={styles.campos} disabled={processando}>
                        <legend className={styles.legenda}>Dados do cartão</legend>

                        <TextField label="Nome do titular" fullWidth autoComplete="off" {...propsDoCampo('titular')} />

                        <TextField
                        label="Número do cartão"
                        placeholder="0000 0000 0000 0000"
                        fullWidth autoComplete="off"
                        slotProps={{ htmlInput: { inputMode: 'numeric', maxLength: 19 } }}
                        {...propsDoCampo('numeroCartao')} />

                        <div className={styles.linha}>
                            <TextField
                            label="Validade"
                            placeholder="MM/AA"
                            fullWidth autoComplete="off"
                            slotProps={{ htmlInput: { maxLength: 5 } }}
                            {...propsDoCampo('validade')} />

                            <TextField
                            label="CVV"
                            placeholder="123"
                            fullWidth autoComplete="off"
                            slotProps={{ htmlInput: { inputMode: 'numeric', maxLength: 3 } }}
                            {...propsDoCampo('cvv')} />
                        
                        </div>
                    </fieldset>

                    <Botao type="submit" tamanho="large" larguraTotal disabled={processando}>
                        {processando ? 'Processando compra...' : 'Pagar agora'}
                    </Botao>

                    <p className={styles.dica}>
                        Para testar: <strong>4111 1111 1111 1234</strong> aprova a compra; um cartão com todos os
                        dígitos iguais (ex.: <strong>1111 1111 1111 1111</strong>) simula uma fraude.
                    </p>
                </form>

                <aside className={styles.lateral}>
                    <ResumoCompra quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
                </aside>
            </div>
        </section>

    )
}

export default Pagamento