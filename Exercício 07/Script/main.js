/*
7. Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.
 */

let base = 38;
let altura = 45;

function calculaAreaRetan(b,a){
    return b * a;
}

console.log('O resultado é: ' +calculaAreaRetan(base, altura)+ 'm²');