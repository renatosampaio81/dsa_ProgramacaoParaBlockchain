/* 
Estrutura de Dados - Arrays
*/

//Exemplo 01
var frutas = ['Morango', 'Melancia', 'Abacate'];

console.log("Exemplo 01");
console.log(frutas);
console.log(typeof(frutas));
console.log(frutas.length);
console.log(frutas.indexOf('Abacate'));

console.log(frutas[1]);
console.log(frutas[3]);

frutas[2] = 'Pera';
frutas[3] = 'Abacaxi';

console.log(frutas);

//Exemplo 02
var valores = new Array(100, 'Rio de Janeiro', ['Morango', 'Melancia']);

console.log("Exemplo 02");
console.log(valores);