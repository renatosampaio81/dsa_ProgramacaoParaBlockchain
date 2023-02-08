/*
Variálvel This
*/

/*
//console.log(this); 
//por padrão, o this sempre aponta para o objeto window, voce pode usar pra manipular tudo dentro da window.. ex. alert, close, etc..

calculaidade(1981);

function calculaidade(ano) {
    console.log(2019 - ano);
    console.log(this);
}
*/

var pessoa1 = {
    nome: 'Bob',
    anoNascimento: 1982,
    calculaIdade: function() {
        console.log(this);
        //aqui, como é um método (função dentro de um objeto), o this aponta para o objeto pessoa1
    
        console.log(2019 - this.anoNascimento);

        function innerFunction() {
            console.log(this);
            //aqui this volta a apontar para window, pq esta função não está dentro do objeto diretamente, e sim dentro de uma outra função.
        }
        innerFunction();
    }
}

pessoa1.calculaIdade();