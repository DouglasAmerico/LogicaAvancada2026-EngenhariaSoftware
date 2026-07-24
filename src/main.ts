let recepcao : string|null = prompt("Informe o numero 1: ");
let n1 : number;

if(recepcao == ""){
    console.log("Precisa ser informado um valor");
    recepcao = prompt("Informe o numero 1: ");
    n1 = Number(recepcao);
}else{
    n1 = Number(recepcao);
}

console.log("O numero "+n1+" 12 = "+(n1+12));