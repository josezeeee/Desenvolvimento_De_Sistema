function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}
function multiplicar (x, y) {
    return x * y;
}

ler resultado = executarOperacao(4, 5, multiplicar);
console.log("multiplicação: " + resultado);