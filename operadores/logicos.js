let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;
let resultadoE = "você vai ao shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

 
let resutadoOU = "Você vai ao shopping ? ";
let resutadoOU += estaEnsolarado || carroEstaNaGaragem; 
console.log(resutadoOU);