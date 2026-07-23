const nome : string|null = prompt("Informe o nome do Aluno(a): ");
const notas : number[] = [];
const qtd : number|null = Number(prompt("Informe a quantidade de notas: "));
let media : number =0;

for (let index = 0; index < qtd; index++) {
    notas[index] = Number(prompt("Informe a nota "+(index+1)+" do aluno(a) "+nome+": "));
    media+= notas[index];
    console.log(media);
}

alert("A media dos valores é "+(media/qtd));