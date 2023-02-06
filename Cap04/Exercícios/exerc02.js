/* 
Escreva função JS que gere todas as combinações de uma string.
Ex. de String = 'dog'
Saída Esperada = d, do, dog, o, og, g
*/

// Minha solução (ajustada)
function divide(_palavra) {
    let pAjustado = [];
    _palavra.split('').forEach((e, i) => { //para cada um dos elementos do split.. faça !
        let idx = i + 1; //para cada item foi criado um indexador idx, além do i que inicia em zero
        while(_palavra.length >= idx) { //para cada item, é verificado se o comprimento é maior/igual que o indexador idx
            pAjustado.push(_palavra.slice(i, idx)); //slice retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim
            idx++;
        }
    })
    return pAjustado.join(','); //junta os elementos do array separados por ,
}

let palavra = prompt("entre com uma palavra:");

console.log('Proposta 01');
console.log(divide(palavra));



// Solução do Professor
function combo2(str){
    var strArr = str.split(""); //crio um array em cima da string
    var temp = ""; //defino uma string

    for(var i = 0; i < strArr.length; i++){ //faça enquanto o contador for menor que a qde de itens do array
        temp = strArr[i];
        console.log(temp);
        for (var j = i + 1;  j < strArr.length; j++) { //somo 1 ao contador externo e defino para o contador interno, faça enquanto o contador interno for menor que a qde de itens do array
            temp += strArr[j];
            console.log(temp);
        }
    }
}

console.log('Proposta 02');
console.log(combo2('dog'));