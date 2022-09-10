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

module.exports = router;
