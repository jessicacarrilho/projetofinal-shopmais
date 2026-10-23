export function caminhoDaImagem(nomeDoArquivo) {
    return new URL(`../../assets/img/${nomeDoArquivo}`, import.meta.url).href;
}