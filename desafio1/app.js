let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlert() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let cidade = prompt('Digite uma cidade do Brasil onde você visitou:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somarDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número da soma:'));
    let segundoNumero = parseInt(prompt('Digite o segundo número da soma:'));
    
    alert(`O resultado é ${primeiroNumero + segundoNumero}`);
}