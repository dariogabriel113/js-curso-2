let listaDeNumeroSorteaods = [];
let numeroSecreto;
let tentativas;
let numeroLimite = 10;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (listaDeNumeroSorteaods.length >= numeroLimite) {
        listaDeNumeroSorteaods = [];
    }

    if (listaDeNumeroSorteaods.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumeroSorteaods.push(numeroEscolhido);
        console.log(listaDeNumeroSorteaods);
    }

    return numeroEscolhido
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagensIniciais() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function reiniciarJogo() {
    exibirMensagensIniciais();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

reiniciarJogo();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tetativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirNaTela('h1', 'Acertou');
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela('p', 'O número secreto é menor');
        } else {
            exibirNaTela('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
}