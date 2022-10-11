/* eslint-disable no-unused-vars */

// Variavel com nome do cinema
// const cinema = 'DH Cinehouse';

// Funcao adicionarFilme - modulo funcoes.js
const funcoes = require('./funcoes');

// Variavel tipo Array com os filmes
const catalogo = require('./database/catalogo.json');

// // Importar construtor Filme
const Filme  = require('./filme');

// // Criar novo filme
const novoFilme = new Filme(8, 'Seven: Os Sete Crimes Capitais', 127, ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'], 1995, false);

funcoes.adicionarFilme(catalogo, novoFilme);
console.log(catalogo);

// // Adicionando filme ao arquivo
funcoes.adicionarFilmeDB('./database/catalogo.json', catalogo);
