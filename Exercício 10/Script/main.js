/*
10. Crie uma função chamada "imprimeTabuada" que recebe um parâmetro "num". A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console.
*/


function imprimeTabuada(num){
    for(let s = 1; s <= 10; s++){
        
        let tabuadaResult = s*num;
        console.log(s+ ' x ' +num+ ' = ' +tabuadaResult);
    }
}

console.log(imprimeTabuada(5));