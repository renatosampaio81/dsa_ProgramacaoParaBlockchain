const http = require('http'); //faz a chamada ao módulo http, que é nativo

const requestlistener = (req, res) => {
  //console.dir(req, {depth: 0}); //pega todos os dados do solicitante da requisição
  //console.dir(req.url); //pega apenas a informação de url do requisitante
  console.dir(res, {depth: 0}); //pega todos os dados de resposta que estamos enviando para o solicitante
  res.end('Hello World\n');
};

const server = http.createServer(requestlistener); //createServer é uma função do módulo Http

server.listen(4242, () => {
  console.log('Server sendo executado...');
});
//servidor web vai rodar na porta 4242 executando a função que mostra na tela "server sendo executado"
//quando o servidor web for requisitado em um navegador, ele terá como resposta "Helo World"
