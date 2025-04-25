/* desafio:  Crie um programa  que leia as váriaveis PI
e raio para que seja posivel calcular o valor da área de circunferência.
o progama deve imprimir na tela o valor calculado utilizando a concatenização de string e variável. */

const PI = 3.14;
const RAIO = 10;
let resultado = PI * (RAIO * RAIO)
console.log("o resultado do cáculo da área de circunferência é: " + resultado + "M²");

resultado = Math.PI * RAIO * RAIO;
console.log("o resultado do cáculo da área de circunferência é: " + resultado + "M²");