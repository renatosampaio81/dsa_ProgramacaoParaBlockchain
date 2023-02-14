/*
Escreva um programa JS para encontrar o item mais frequente
de um array.

Array de entrada = var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a',3 , 'a', 2, 4, 9, 3]
Saída Esperada = letra a (5 vezes)
*/

function getMostFrequent(arr) {
    let freq = {}; //objeto (ou dicionário) para contagem dp elemento array

    for (let item of arr) { //para cada item do array, faça...
        if (freq[item] == undefined) { 
            freq[item] = 1;
        }
        else {
            freq[item] += 1;
        }
        //se o item do array não existir no dicionário, defina o valor 1. Se o item do array já existe no dicionário, some 1.
    }

    console.log(freq);


    // Verifica o elemento do array com maior contagem
    let frequency = 0;
    let element = "";

    for (let i in freq) { //percorre cada item do dicionário
        if (freq[i] > frequency) { //verifica qual o valor do primeiro elemento e compara se é maior que o frequency
            frequency = freq[i]; //sendo maior, atribui o valor do item ao frequency;
            element = i; //atribui a var element o nome ddo item do dicionário (e não o seu valoir)
        }
    }
    console.log(element + "(" + frequency + " vezes)");
}

getMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a',3 , 'a', 2, 4, 9, 3]);