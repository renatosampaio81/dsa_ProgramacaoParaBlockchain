// Definição de Classe
function Carro() {

    //Atributos Privados
    var Marca = "Sem marca";
    var Modelo = "Sem modelo";

    //Atributos públicos
    this.SetMarca = SetMarca;
    this.SetModelo = SetModelo;
    this.ShowMarca = DisplayMarca;
    this.ShowModelo = DisplayModelo;

    //Métodos
    function DisplayMarca() {
        alert("Marca do carro: " + Marca);
    }

    function DisplayModelo() {
        alert("Modelo do carro: " + Modelo);
    }

    function SetMarca(_marca) {
        Marca = _marca;
    }

    function SetModelo(_modelo) {
        Modelo = _modelo;
    }
}

// Objeto: Instância da Classe Carro
var carro = new Carro();

// Definição de atributos
//carro.Marca = "Fiat";
//carro.Modelo = "Uno";
//As duas linhas acima não funcionam, Marca e Modelo são atributos privados
carro.SetMarca("Fiat");
carro.SetModelo("Uno");
//As duas linhas acima são a forma correta

// Display
carro.ShowMarca();
carro.ShowModelo();