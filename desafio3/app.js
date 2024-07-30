function calculaIMC(alturaEmMetros, pesoEmQuilogramas) {
    return pesoEmQuilogramas / (alturaEmMetros * alturaEmMetros);
}

function calculaFatorial(valor) {
    let resultado = 1;
    for(i = valor; i > 0; i--) {
        resultado = resultado * i
    }

    return resultado;
}