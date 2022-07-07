/* Programação Orientada a Objetos */

// Herança

// Definindo Classe Pai
var pai = {
    valor:100,
    getValor: function funcao() {
        return this.valor;
    }
}

// Definindo Classe Filho
var filho = Object.create(pai);
filho.valor = 200;

// Definindo Classe Neto
var neto = Object.create(filho);

// Verificando Herança
console.log('*** Hierarquia de Classes ***');
console.log('Valor da Classe Pai: ' + pai.getValor());
console.log('Valor da Classe Filho: ' + filho.getValor());
console.log('Valor da Classe Neto: ' + neto.getValor());



// Polimorfismo

// Definindo Classe Pai
var pai = {
    valor:100,
    getValor: function funcao() {
        return this.valor;
    }
}

// Definindo Classe Filho
var filho = Object.create(pai);
filho.valor = 200;

// Redefine o método getValor na classe Filho
filho.getValor = function outraFuncao() {
    return this.valor + 50;
}

// Atribuindo valor a propriedade na classe Filho
filho.valor = 200;

// Verificando Polimorfismo
console.log('*** Polimorfismo ***');
console.log('Valor da Classe Pai: ' + pai.getValor());
console.log('Valor da Classe Filho: ' + filho.getValor());
