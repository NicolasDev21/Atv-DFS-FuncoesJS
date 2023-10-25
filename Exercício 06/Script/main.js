/*
6. Crie uma função chamada "imprimeImpares" que recebe um parâmetro "num". A função deve imprimir no console todos os números ímpares de "num" até 0, em ordem decrescente. Em seguida, chame a função "imprimeImpares" com diferentes valores para "num" e exiba o resultado no console.
*/

function imprimeImpar(num){
    for(let s = num; s !== 0; s--){
        if(s % 2 == 1){
            console.log(`O número ímpar é: ${s}`);
        }
    }
}

console.log(imprimeImpar(10));