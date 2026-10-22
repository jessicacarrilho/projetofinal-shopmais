export function CaminhoDaImagem(nomeImagem) {
    return new URL(`../../assets/img/${nomeImagem}`, import.meta.url).href;
}