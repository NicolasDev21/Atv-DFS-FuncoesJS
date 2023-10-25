/*
2. Crie uma função chamada "media" que recebe três parâmetros, "a", "b" e "c". A função deve calcular a média dos três valores e retornar o resultado. Em seguida, chame a função "media" com valores diferentes e exiba o resultado no console.
*/ 

let a = 4;
let b = 2;
let c = 10;

function media(num1, num2, num3){
    return (num1 + num2 + num3)/3
}

console.log(media(a, b, c).toFixed(2));
console.log(media(5, 7, 9));