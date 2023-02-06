/* Programação Orientada a Objetos */

// Herança

// Definição da classe Pessoa
function Pessoa () {}

/*
Pode ser utilizados duas formas para criar métodos na classe.
Uma forma é utilizando prototype, que é um recurso do JS, possibilita modificar uma classe depois que ela foi criada.
Outra formaa é criar uma função dentro da classe.

Para criar herança no JS vamos utilizar prototype, transferir propriedades e métodos de um objeto para outro.
*/

Pessoa.prototype.caminhar = function() {
    alert ('Sou uma pessoa e estou caminhando !');
}

Pessoa.prototype.dizOi = function() {
    alert ('Sou uma pessoa e digo oi !');
}


// Define a classe Estudante, que vai ser uma subclasse de Pessoa
function Estudante() {
    // Chama o método pai
    Pessoa.call();
}

// Herda de Pessoa
Estudante.prototype = new Pessoa();

// Corrige o pronteiro construtor, que aponta para Pessoa
Estudante.prototype.constructor = Estudante;


// Adiciona o método dizOi
Estudante.prototype.dizOi = function() {
    alert ('Sou um estudante e digo oi !');
}

// Adiciona o método dizTchau
Estudante.prototype.dizTchau = function() {
    alert ('Sou um estudante e digo tchau !');
}

// Objeto
var estudante1 = new Estudante();
estudante1.dizOi();
estudante1.caminhar();
estudante1.dizTchau();

// Checa a herança
alert(estudante1 instanceof Pessoa);
alert(estudante1 instanceof Estudante);