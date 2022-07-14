/*
Escopo
*/

var a = "Oi!";
primeiro();

function primeiro() {
    var b = "Oi2!";
    segundo();

    function segundo() {
        var c = "Oi3";
        console.log(a + b + c);
        terceiro();
    }
}

// A função terceiro está fora da cadeia de escopo da função primeiro e segundo, portanto não enxerga suas var locais.
function terceiro() {
    var d = "Bob";
    console.log (a + b + c + d); //erro
}