// Desconstruindo um Pacote

// Pacote Math
const PI = Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math; //diz ao sistema que PI, E e SQRT pertencem ao Math, sem precisar chama-lo toda vez (Ex Math.PI chame direto PI)

// Com require
const { readFile } = require('fs'); //mesma coisa, chamo direto readFile sem precisar fazer o require fs

