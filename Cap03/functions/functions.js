/* Funções */


//Exemplo 01
function square(x) {
    return x * x;
}

console.log("Exemplo 01");
console.log(square(3));

//Exemplo 02
function calculaComissao(salario) {
    return salario * 0.15;
}

var func1Comissao = calculaComissao(4000);
var func2Comissao = calculaComissao(3500);
var func3Comissao = calculaComissao(1000);

console.log("Exemplo 02");
console.log(func1Comissao, func2Comissao, func3Comissao);

//Exemplo 03
function calculaComissaoTurno (salario, turno) {
    var comissao = calculaComissao(salario);

    if (turno == "Noite") {
        console.log('Turno ' + turno + ' recebe adicional de 100 reais. Comissao = ' + (comissao + 100));
    } else {
        console.log('Turno ' + turno + ' recebe valor normal. Comissao = ' + comissao);
    }
}

console.log("Exemplo 03");
calculaComissaoTurno(10000, 'Noite');
calculaComissaoTurno(6500, 'Dia');
calculaComissaoTurno(8000, 'Noite');

//Exemplo 04
function power(base, expoente) {
    if (expoente == undefined)
        expoente = 2;

    var result = 1;

    for (var count = 0; count < expoente; count++)
        result *= base;
    
    return result;
}

console.log("Exemplo 04");
console.log(power(5));
console.log(power(5, 3));
console.log(power(5, 3, 3));
console.log(power());

//Exemplo 05 - Recursividade (chamada de função a si mesma)
function power2(base, expoente) {
    if (expoente == 0)
        return 1;
    else {
        return base * power2(base, expoente -1)
    }
}

console.log("Exemplo 05");
console.log(power2(2, 3));
