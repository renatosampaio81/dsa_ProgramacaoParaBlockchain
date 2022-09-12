var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET UserList page */
router.get('/userlist', function(req, res) {
  var db = req.db; //obtém conexao com o BD
  var collection = db.get('usuarios'); //obtém o nome da colletion que é uma espécie de tabela (no caso usuários)
  collection.find({},{},function(e,docs) { //busca tudo que tem dentro da collection
    res.render('userlist', { //lista o conteúdo da colletction
      "userlist" : docs
    });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Adiciona Novo Usuário' }); //Substitui o título lá na newuser.ejs
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  var db = req.db; //abre a conexão com o BD
  var collection = db.get('usuarios'); //verifica a collection

  // Obtém valores do formulário web
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Envia para o banco de dados
  collection.insert({
      "username" : userName,
      "email" : userEmail
  }, function (err, doc) {
      if (err) {
          res.send("Problema com o banco de dados.");
      }
      else {
          // E carrega a lista de usuários
          res.redirect("userlist");
      }
  });
});

module.exports = router;
