/*
Escreva um programa JS para listar as propriedades de um objeto JS

Objeto de amostra:
var estudante = {
    nome: "Aluno DSA",
    turma: "Blockchain",
    codigo: 180)};

Saída esperada: Aluno DSA, Blockchain, 180
*/

// Minha Solução:
let estudante = {
    nome: "Aluno DSA",
    turma: "Blockchain",
    codigo: 180
}

console.log (estudante.nome + ', ' + estudante.turma + ', ' + estudante.codigo);

// Solução do Professor
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ Nome: 'Aluno DSA', turma: 'Blockchain', codigo: 180 }, v => console.log(v));