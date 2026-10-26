import { useEffect, useMemo, useRef, useState } from 'react'
import Botao from '../components/atoms/Botao'
import CampoBusca from '../components/atoms/CampoBusca'
import Mensagem from '../components/atoms/mensagem'
import ListaProdutos from '../components/organisms/ListaProdutos'
import { useProdutos } from '../hooks/useProdutos'
import { filtrarProdutos } from '../utils/busca'
import styles from './Produtos.module.css'


//Pagina /produtos: vitrine com busca.

function Produtos() {
    const { produtos, loading, error } = useProdutos()

    const [termo, setTermo] = useState('')

    const campoBuscaRef = useRef(null)

    useEffect(() => {
        campoBuscaRef.current?.focus()
    }, [])

    const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos.termo),
)

function limparBusca() {
    setTermo('')
    campoBuscaRef.current?.focus()
}

function renderizarConteudo() {
    if (loading) {
        return <Mensagem tipo="carregando" texto="Carregando produtos..."/>
    }
    if(error) {
        return <Mensagem tipo="erro" texto={error}/>
    }
    if(produtosFiltrados.length === 0) {
        return ( <Mensagem tipo="vazio" texto="Nenhum produto encontrado">
            <Botao variante="secundario" onClick={limparBusca}>Limpar busca
        </Botao>
        </Mensagem> )
    }
}

return <ListaProdutos produtos={produtosFiltrados} />

}

return (
    <section className={styles.pagina}>
        <div className={styles.topo}>
            <div>
                <h1 className={styles.titulo}>Moda Feminina</h1>
                <p className={styles.subtitulo}>Roupas, calçados e acessórios para todos os momentos.</p>
            </div>
            <CampoBusca ref={campoBuscaRef} valor={termo} onMudar={setTermo} />
        </div>

        {renderizarConteudo()}
    </section>
)

export default Produtos





