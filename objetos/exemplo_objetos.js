const aluno = {
    nome: 'José Vit',
    idade: 16,
    curso: "desemvolvimento de Sistemas",
};
 
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A";
aluno.idade = 16 ;
console.log(aluno);

delete aluno.curso;