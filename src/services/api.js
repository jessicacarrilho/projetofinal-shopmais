import dadosLocais from '../../db.json';

const USAR_API = import.meta.env.VITE_USAR_API === 'true';
const API_URL = import.meta.env.VITE_USAR_URL ?? 'http://localhost:3001';

export async function buscarProdutos() {
    if (!USAR_API)
        return dadosLocais.produtos;
    const resposta = await fetch(`${API_URL}/produtos`);
    if (!resposta.ok) {
        throw new Error(`Erro ao buscar produtos (status ${resposta.status})`);
    }
    return await resposta.json();
}

export async function buscarProdutoPorId(id) {
    if (!USAR_API) {
        return dadosLocais.produtos.find((produto) => produto.id === String(id)) ?? null;
    }

    const resposta = await fetch(` ${API_URL}/produtos/${encodeURIComponent(id)}`);
    if (resposta.status === 404) 
        return null;
    if (!resposta.ok) {
        throw new Error (`Erro ao buscar o produto ${id} (status ${resposta.status})`);
    }
    return resposta.json();
}
