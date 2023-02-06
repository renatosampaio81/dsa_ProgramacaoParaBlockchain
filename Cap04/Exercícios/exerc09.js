/*
Solução da Lista de Exercícios - Exercício 09

Para começar, criaremos um objeto global chamado Google. Ele conterá outro objeto para funcionários,
que conterá mais objeto para e seus funcionários individuais.

*/

// Cria a classe {google}
var google = {

    employeers: { //employeers é o primeiro objeto da classe google
        management: {},
        developers: {},
        maintenance: {},
    },

    // Cria um novo empregado com suas propriedades (construtor)
    NewEmployee: function(name, role, phone, idNumber) {
        var newEmployeeData = {
            name: name,
            role: role,
            phone: phone,
            idNumber: idNumber,
            working: false,
            hours: [],
        }
    
        // Atribui o objeto a google.employees[role][name]  Ex. Renato na função Developer - DevRenato
        google.employeers[role][name] = newEmployeeData;

        //Retorna o novo objeto diretamente do google.employees[role][name]
        return google.employeers[role][name];
    }
}

// Cria a instância do empregado Bob
// Cria {google:employees:maintenance["bob"]} a partir de NewEmployee()
emp = google.NewEmployee("Bob", "maintenance", "2035555555", "1234521");

/*
Aqui, adicionamos o método clockInOut() ao nosso código.
Se for início do horário de trabalho, ele criará uma nova matriz com um carimbo de data/hora no indice 0.
Se o empregado já estiver trabalhando, ele adicionará um registro de data e hora ao último array criado,
criando uma matriz semelhante a esta: [1518491647421, 1518491668453] com o primeiro elemento sendo o timestamp quando o empregado 
e o segundo quando o empregado "registra o término do trabalho".
*/
emp.clockInOut = function() {
    if(this.working) { //se verdadeiro
        //this.hours[this.hours.lenght - 1].push(Date.now()); //Não funcionou
        this.hours.push(Date.now());
        this.working = false;
        return this.name + " retornou ao trabaklho neste instante: " + Date.now();
    }
    else {
        this.hours.push([Date.now()]);
        this.working = true;
        return this.name + " iniciou o trabalho neste instante: " + Date.now();
    }
//Se acima falhar, retorna erro
return "Erro";
}

console.log(emp.clockInOut());
console.log(emp.clockInOut());