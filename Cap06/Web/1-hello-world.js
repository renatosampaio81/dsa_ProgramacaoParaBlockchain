const http = require('http'); //faz a chamada ao módulo http, que é nativo

const requestlistener = (req, res) => {
  res.end('Hello World\n');
};

const server = http.createServer(requestlistener); //createServer é uma função do módulo Http

server.listen(4242, () => {
  console.log('Server sendo executado...');
});
//servidor web vai rodar na porta 4242 executando a função que mostra na tela "server sendo executado"
//quando o servidor web for requisitado em um navegador, ele terá como resposta "Helo World"
