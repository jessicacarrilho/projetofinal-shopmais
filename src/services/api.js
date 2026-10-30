import db from '../../db.json';

const USAR_API = import.meta.env.VITE_USAR_API === 'true'
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

function lerDoDbLocal(endpoint) {
    const [colecao, id] = endpoint.split('/')
    const lista = db[colecao] ?? []
    if (!id) {
        return lista
    }
    return lista.find((item) => String(item.id) === id) ?? null
}
export async function apiGet(endpoint) {
    if (!USAR_API) {
        return lerDoDbLocal(endpoint)
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`)
    if (response.status === 404) {
        return null
    }
    if(!response.ok) {
        throw new Error(`Erro ao buscar ${endpoint}: ${response.status}`)
    }
    return response.json()
}