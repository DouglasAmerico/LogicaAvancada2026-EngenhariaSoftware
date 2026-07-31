let recebe : string|null; 
let numero1 : number =0, numero2: number=0;

const validaSeNull = (valor:string):boolean => 
    (valor != null) ? true:false;

const validaSeVazio = (valor:string):boolean =>
    (valor != "") ? true:false;

const validaSeNumeroValido = (valor:string):boolean =>
    (!isNaN(Number(valor))) ? true:false;

const validaSeValorENumero = (valor : string): boolean =>
    (!
        (validaSeNumeroValido(valor))&&
        (validaSeVazio(valor))       &&
        (validaSeNull(valor))
    ) ? true : false;
