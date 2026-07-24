const senhaPadrao : string = "1234";
let tentativas : number = 3;

while(
        (prompt("Informe a senha") != senhaPadrao) &&
        (tentativas > 0)
                                                    ){
    alert("Informe a senha correta");
    tentativas--;
    if(tentativas < 0) {
        alert("Numero de tentativas estourou")
    }
}

