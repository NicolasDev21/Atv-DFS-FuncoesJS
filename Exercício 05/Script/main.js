/*
5. Crie uma função chamada "imprimeNumeros" que recebe um parâmetro "num". A função deve imprimir no console todos os números de 0 até "num", em ordem crescente. Em seguida, chame a função "imprimeNumeros" com diferentes valores para "num" e exiba o resultado no console.
*/

// let numAleatory = Number(prompt(`Digite um número aleatório:`));


function imprimeNum(num){
    for(let s = 0; s <= num; s++){
        console.log(s);
    }
}

console.log(imprimeNum(10));