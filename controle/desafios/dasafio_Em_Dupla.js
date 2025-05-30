function executarOperacao(a, b, operacao){
    return operacao (a, b);
}
function multiplicar(x, y) {
    return x * y;
}

let resultado = executarOperacao(45, 69, multiplicar);
console.log("multiplicação: " + resultado);
