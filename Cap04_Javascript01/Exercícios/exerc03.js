/* 
Escreva função JS que converta uma string qualquer em uma string
com letras em ordem alfabética.
Ex. de String = 'webmaster'
Saída Esperada = 'abeemrstw'

Assuma que pontuação e simbolos não são incluídos na sequencia de entrada.
*/


// Minha solução
let palavra = prompt("Entre com a palavra a ser convertida");
let temp = palavra.split("");
temp.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

pAjustada = temp.join('');
console.log(pAjustada);


// Solução do Professor 01
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

// Solução do Professor 02 - Bubble Sort
var given = "webmaster";
var splitted = given.split("");
var bigger, smaller = "";

for (i = 0; i < splitted.length; i++) { //serão dois laços para comparar a palabra webmaster com ela mesma
    for (j = 0; j < splitted.length; j++) {
        if (splitted[i] > splitted[i + j]) {
            bigger = splitted[i]; //bigger recebe o elemento maior e vice versa
            smaller = splitted[i + j];
            splitted[i + j] = bigger; //muda os elementos de lugar
            splitted[i] = smaller;
        }
    }
}

console.log(splitted);