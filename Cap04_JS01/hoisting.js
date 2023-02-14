/*

Hoisting
É a varredura no código atrás de variáveis e funções, localizando ele faz a alocação na memória,
antes da execução do código propriamente dita.

Nesse caso posso fazer uma chamada de função antes mesmo de escrever o código dela, pois o Hoisting
já carregou aquela função para memória antes da fase de execução do código.

Obs: Só funciona em funções declaradas.

*/

// chamada a função
//aposentadoria(1981);

// função 01 - Declaração de função
function calculaIdade(ano) {
    console.log(2022 - ano);
}

// função 02 - Expressão de função
var aposentadoria = function(ano) {
    console.log(65 - (2019 - ano));
}

// chamada a função
aposentadoria(1981);


// Variáveis
console.log(idade); //apesar do Hoisting ter reservado em memória a var idade, ela recebe o valor undefined nesse primeiro momento
var idade = 32; // var global
console.log(idade);


// Função 03
function testaIdade() {
    var idade = 65; //var local da função 03
    console.log(idade);
}

testaIdade();

console.log(idade); //imprime a var global

