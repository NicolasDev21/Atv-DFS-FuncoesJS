/*
8. Crie uma função chamada "verificaPrimo" que recebe um parâmetro "num". A função deve verificar se o número recebido é primo e exibir uma mensagem no console informando se é ou não primo. Em seguida, chame a função "verificaPrimo" com diferentes valores para "num" e exiba o resultado no console.
 */


/*
TESTE COM OS SEGUINTES NÚMEROS PRIMOS:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89
*/

/* A lógica do código é impedir que o número seja dividido por 1 e por ele mesmo, logo, os números que tem divisores no "meio do caminho" são pescados e recebem o valor "false" (por serem divisíveis por outros números além de 1 e ele mesmo)

Segue abaixo:
*/

function verificaPrimo(limitNum){
    for(let s = 2; s <= limitNum; s++){
        let ehPrimo = true; //Até aqui, consideramos todos os números como primo.

        for(let divisor = 2; divisor < s; divisor++){  //os numeros e os divisores são calculados um com o outro até chegar a um número ANTES do número, para nunca um número ser dividido por ele mesmo (2%2, 3%3, 4%4 por exemplo), já que daria resto 0 e ele cairia como false.

            if(s % divisor === 0){ //aqui é calculado o resto da divisão 

                ehPrimo = false; //a variável boleana captura todos os números os quais tem resto 0, é feita uma intersecção com os números que receberam "true"
                break;
            }
        }
        if(ehPrimo === true){ //se tiver recebido "true" imprimir no console 
            console.log(s);
        }
    }
}

console.log(verificaPrimo(20));