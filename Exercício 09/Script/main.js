/*
9. Crie uma função chamada "concatenaTexto" que recebe dois parâmetros, "texto1" e "texto2". A função deve concatenar os dois textos recebidos e retornar o resultado. Em seguida, chame a função "concatenaTexto" com diferentes valores para "texto1" e "texto2" e exiba o resultado no console.
*/

let nome1 = `Nicolas`;
let nome2 = `Gomes`;

function concatenaTxt(txt1, txt2){
    return txt1+ ' ' +txt2;
}

console.log(concatenaTxt(nome1, nome2));