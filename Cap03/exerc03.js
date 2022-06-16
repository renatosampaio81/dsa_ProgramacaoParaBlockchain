/* Exercício 03
Criar uma string que representa uma grade 8x8.
Similar a um tabuleiro de xadrez.
*/

var tamanho = 8, texto = '';

for (var i = 0; i < tamanho; i++, texto += '\n') {
    for (var j = 0; j < tamanho; j++) {
        texto += (i+j) % 2 ? ' ' : '#';
        // Se i+j for divisivel por 2 imprime espaço, senao #
    }
}

console.log(texto);