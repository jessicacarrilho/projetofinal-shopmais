//regras da busca de produtos

export function normalizarTexto(texto) {
    return String(texto ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function filtrarProdutos(produtos, termo) {
  if (!Array.isArray(produtos)) {
    return []
  }

  const termoNormalizado = normalizarTexto(termo)
  if (termoNormalizado === '') {
    return produtos
  }

  return produtos.filter((produto) => normalizarTexto(produto.nome).includes(termoNormalizado))
}