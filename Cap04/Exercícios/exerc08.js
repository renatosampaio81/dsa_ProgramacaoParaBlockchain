/*
Escreva um programa JS para classificar a seguinte matriz de objetos pelo valor do título.

biblioteca var = [
    {
        autor: 'Bill Gates',
        título: 'The Road Ahead',
        readingStatus: true
    }

    {
        autor: 'Steve Jobs',
        título: 'Walter Isaacson',
        readingStatus: true
    }

    {
        autor: 'Suzanne Collins',
        título: 'Mockingjay: O Livro Final dos Jogos Vorazes',
        readingStatus: false
    }
]

*/

// Minha Solução
var mObjetos = [
    {
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        readingStatus: true
    },

    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        readingStatus: true
    },

    {
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay: O Livro Final dos Jogos Vorazes',
        readingStatus: false
    }
]

function compareTitulo(a,b) {
    if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
        return -1;
    }
    if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
        return 1;
    }
        return 0;
}

mObjetos.sort(compareTitulo);
console.log(mObjetos);

//Solução do Professor - Ele ordenou pelo tamanho do título e não por alfabético
var biblioteca = [
    {
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        readingStatus: true
    },

    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        readingStatus: true
    },

    {
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay: O Livro Final dos Jogos Vorazes',
        readingStatus: false
    }
]

var arr = [];

var res = biblioteca.sort(function(a,b) {
    return a.titulo > b.titulo;
})

console.log(res);