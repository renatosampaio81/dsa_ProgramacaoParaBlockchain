/*
Escreva uma função JS para clonar um array de entrada,
deve ser gerada uma cópia exata como saída e no formato de array
*/

var array_Clone = function(arr1) {
    return arr1.slice(0); //retorna um clone (numa nova area de memória) do array de entrada
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));