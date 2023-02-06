/* 
Escreva função JS que inverta um número
Ex. de Entrada = 32243
Saída Esperada = 34223
*/

// Minha solução
/*
var numero = prompt("entre com numero de 5 gigitos:");
var nSplit = numero.split("");
console.log('O número digitado foi: ' + nSplit);
var nInvert = nSplit.reverse();
console.log('O inverso dele é: ' + nInvert);
*/

// Solução do Professor
function reverse_a_number(n) {
    n = n + ""; //insere aspas duplas na var n, que era number e agora é string
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(123456));
