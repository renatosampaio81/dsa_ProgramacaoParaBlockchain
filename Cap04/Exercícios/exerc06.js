/*
Temos os arrays:
cor = ["Azul", "Verde", "Vermelho", "Laranja"]
ordem = ["Primeira", "Segunda", "Terceira", "Quarta"]

Escreva um programa em JS para exibir as cores da seguinte maneira:
"Primeira escolha é azul"
"Segunda escolha é verde"
"Terceira escolha é vermelho"
"Quarta escolha é laranja"
*/

// Minha solução:
let cor = ["Azul", "Verde", "Vermelho", "Laranja"];
let ordem = ["Primeira", "Segunda", "Terceira", "Quarta"];

for (let index = 0; index < ordem.length; index++) {
    console.log(ordem[index]+" escolha é "+cor[index]);    
}

// Solução do Professor está igual