let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do número secreto');
exibirNaTela('p',  'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou');
        exibirNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if(chute > numeroSecreto) {
            exibirNaTela('p', 'O número secreto é menor');
        } else {
            exibirNaTela('p', 'O número secreto é maior');
        }
    }
}

function gerarNumeroAleatorio(params) {
    return parseInt(Math.random() * 10 + 1);
}