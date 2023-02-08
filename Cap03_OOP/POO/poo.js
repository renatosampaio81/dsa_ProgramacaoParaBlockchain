/* Programação Orientada a Objetos */

// Classes em JavaScript Usando Funções

//Definição da classe
function Pessoa(nome){
    this.Nome = nome; //Nome é uma var publica, que pode ser usada fora dessa classe

}

// Objetos: Instâncias da classe
var pessoa1 = new Pessoa('Maria');
var pessoa2 = new Pessoa('Bob');

//Propriedades dos Objetos
console.log('Nome Pessoa1: ' + pessoa1.Nome);
console.log('Nome Pessoa2: ' + pessoa2.Nome);

// Classes em JS usando objetos literais (alternativa para instanciar um objeto)
var carro = {
    marca: undefined,
    modelo: undefined,
    getDetalhes: function () {
        return this.marca + ' - ' + this.modelo;
    }
}
// Definição de objeto feita diretamente, sem necessidade de definir classe

carro.marca = "Fiat";
carro.modelo = "Uno";
alert("Marca e Modelo do Objeto Carro: " + carro.getDetalhes());

console.log(typeof(carro));