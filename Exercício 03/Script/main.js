/*
3. Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.
 */

let a = 5;
let b = 10;
let c = 15;

function maiorValor(v1, v2, v3){
    if(v1 > v2 && v1 > v3){
        return console.log(`O valor maior é: ${v1}`);
    }else if(v2 > v1 && v2 > v3){
        return console.log(`O maior valor é: ${v2}`);
    }else if(v3 > v1 && v3 > v2){
        return console.log(`O maior valor é: ${v3}`);
    }else{
        return console.log(`Os número são iguais!`);
    }
}

console.log(maiorValor(a, b, c));
console.log(maiorValor(20,40,100));