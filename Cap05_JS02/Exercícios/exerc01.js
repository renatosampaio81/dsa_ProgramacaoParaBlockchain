/*
Solução - Exercício - Pesquisa Binária

considerando o Array abaixo:
lista = [2, 5, 8, 9, 13, 45, 67, 99]

Crie um programa com pesquisa binária que busque pelo item 99 e indique seu índice na lista.
*/

/*
//Minha Solução
var arr = [2, 5, 8, 9, 13, 45, 67, 99];
var numero = parseInt(prompt("Entre com o número:"));

function search(_arr,_numero) {
    if(_arr.indexOf(_numero)>=0) {
        return "Está no índice " + _arr.indexOf(_numero);
    } else {
        return "Não está no array"
    }
}

console.log (search(arr,numero));
*/

//Solução do Professor
function binarySearch (list, value) {
    //Valores iniciais para inicio, meio e fim
    let start = 0;
    let stop = list.length - 1; // 7
    let middle = Math.floor((start + stop) / 2); // (0+7)/2 = 3 (arredondado = floor)

    //Enquanto o meio não é o que estamos procurando e a lista nao tem um único item
    while (list[middle] !== value && start < stop) { //fazer enqunato o item do array na posição middle for diferente do valor procurado E start for maior que stop (quando esta segunda no for Verdadeira, é porque o número procurado não está no array)
        if (value < list[middle]) { //se o valor procurado por menor que o o item na posição middle do array
            stop = middle - 1
        } else {
            start = middle + 1
        }

        //Recalcular o meio em cada interação
        middle = Math.floor((start + stop) / 2);
    }

    //Se o item do meio atual for o que estamos procurando, retorne ao índice, senão retorne -1
    return (list[middle] !== value) ? -1 : middle;
}

//Lista para testar o algoritmo
const list = [2, 5, 8, 9, 13, 45, 67, 99];

// 7 -> retorna o índice do item
console.log(binarySearch(list, 99));