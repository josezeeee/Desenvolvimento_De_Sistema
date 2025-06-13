const frutas = [ 'Maçã', 'Banana', 'Uva'];
console.log(frutas[2]);

frutas[3] = 'Abacaxi'; //Adicionar no indice informado
frutas.push('Pêra');  // Aidicionar por último
console.log(frutas);

frutas.pop(); //Remover o Último dado
frutas.splice(1, 2);
console.log(frutas);

//                     0         1     2     3    4
const numero = ['10', '20', '30','40','50',];
numero.splice(1, 2);
console.log(numero);

numero[0] = 100;
console.log(numero.indexOf);
console.log(numero);
console.log(numero.includes (40));
console.log(numero.includes (10));
console.log(numero.join);
