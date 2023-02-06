/* Exercício 02
Imprima todos os números de 01 a 100
- Para os divisíveis por 3 imprima FizzBuzz
- Para os divisíveis por 5 imprima Buzz
- Para os dicisíveis por 3 e 5 imprima Fizz.
*/

var fim = 101;

for (var index = 1; index < fim; index++) {

    if (index % 5 === 0 && index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else if (index % 3 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(index);
    }

}