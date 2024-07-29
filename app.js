let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do número secreto');
exibirNaTela('p',  'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == chute);
}

function gerarNumeroAleatorio(params) {
    return parseInt(Math.random() * 10 + 1);
}