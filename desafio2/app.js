function exibirOlaMundo() {
    exibirOlaPorParametro('mundo');
}

function exibirOlaPorParametro(texto) {
    console.log(`Olá, ${texto}!`);
}

function retornaDobro(valor) {
    return valor * 2;
}

function retornaMaiorValor(numero1, numero2) {
    return Math.max(numero1, numero2);
}

function retornaValorAoQuadrado(valor) {
    return valor * valor;
}

function retornaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}