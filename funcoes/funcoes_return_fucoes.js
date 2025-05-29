function CriarMultiplicar(fator){
    return function(numero){
        return numero * fator;
    }
}

const dobrar = CriarMultiplicar(2);
const triplicar = CriarMultiplicar(3);

console.log(dobrar(5));
console.log(triplicar(5));
