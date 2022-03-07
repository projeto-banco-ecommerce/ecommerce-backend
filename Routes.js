const express = require('express');

//Criar e adicionar rotas
//const User = require('./');

//definir carrinho
const carrinho = require('./Carrinho/carrinho')


const routes = express.Router();



//Rotas 

//rotas carrinho.
routes.post('product', carrinho.set);
routes.get('product', carrinho.get);
routes.delete('product', carrinho.del);

module.exports = routes;