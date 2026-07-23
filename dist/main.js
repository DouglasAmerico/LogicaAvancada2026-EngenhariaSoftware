"use strict";
const nome = prompt("Informe o nome do Aluno(a): ");
const notas = [];
const qtd = Number(prompt("Informe a quantidade de notas: "));
let media = 0;
for (let index = 0; index < qtd; index++) {
    notas[index] = Number(prompt("Informe a nota " + (index + 1) + " do aluno(a) " + nome + ": "));
    media += notas[index];
    console.log(media);
}
alert("A media dos valores é " + (media / qtd));
