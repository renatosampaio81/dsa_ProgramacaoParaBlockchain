/* Programação Orientada a Objetos */

// Construtor

// Exemplo 01
// Definição de Classe Construtor
var Pessoa = function() {
    console.log("Exemplo 01: Objeto Criado !");
}

// Objetos
var pessoa1 = new Pessoa();
var pessoa2 = new Pessoa();

// Exemplo 02
// DefiniçAo de Classe Construtor
var Pessoa = function(nome) {
    this.Nome = nome;
    console.log('Exemplo 02: Exemplar da Classe Pessoa Criado');
}

// Objetos
var pessoa1 = new Pessoa('Maria');
var pessoa2 = new Pessoa('Bob');

// Atributos
console.log('Exemplo 02: Nome da pessoa1 ' + pessoa1.Nome);
console.log('Exemplo 02: Nome da pessoa2 ' + pessoa2.Nome);

// Exemplo 03
// DefiniçAo de Classe Construtor
var Pessoa = function(genero) {
    this.genero = genero;
    console.log('Exemplo 03: Pessoa instanciada');
}

// Métodos
Pessoa.prototype.dizerOla = function() {
    console.log('Exemplo 03 (Método): Hello');
}

Pessoa.prototype.dizgenero = function() {
    console.log('Exemplo 03 (Método): ' + this.genero);
}

// Objetos
var pessoa1 = new Pessoa('Masculino');
var pessoa2 = new Pessoa('Feminino');

// Chamando o método dizerOla
pessoa1.dizerOla();

// Chamando o método dizGenero
pessoa1.dizgenero();