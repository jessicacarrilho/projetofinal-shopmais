const formatadorReais = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export function formatarMoeda(valor) {
    const valorEhValido = typeof valor === 'number' && Number.isFinite(valor);
    return formatadorReais.format(valorEhValido ? valor : 0);
}