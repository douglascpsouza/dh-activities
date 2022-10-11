/* eslint-disable no-unused-vars */

// Construtor Filme - modulo filme.js
const Filme = require('./filme');

// Funcao adicionarFilme - modulo funcoes.js
const funcoes = require('./funcoes');

// Importando modulo fs
const fs = require('fs');

// Variavel com nome do cinema
const cinema = 'DH Cinehouse';

const catalogo = [];

// Adicionando filmes ao catalogo
funcoes.adicionarFilme(catalogo, new Filme(1, 'O Poderoso Chefão', 175, ['Marlon Brando', 'Al Pacino', 'James Caan'], 1972, false));
funcoes.adicionarFilme(catalogo, new Filme(2, 'O Império Contra-Ataca', 142, ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'], 1980, false));
funcoes.adicionarFilme(catalogo, new Filme(3, 'Um Sonho de Liberdade', 142, ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'], 1994, false));
funcoes.adicionarFilme(catalogo, new Filme(4, 'Matrix', 136, ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'], 1999, false));
funcoes.adicionarFilme(catalogo, new Filme(5, 'Batman: O Cavaleiro das Trevas', 152, ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'], 2008, false));
funcoes.adicionarFilme(catalogo, new Filme(6, 'Tudo em Todo o Lugar ao Mesmo Tempo', 139, ['Michelle Yeoh', 'Ke Huy Quan', 'Jamie Lee Curtis'], 2022, true));
funcoes.adicionarFilme(catalogo, new Filme(7, 'Top Gun: Maverick', 131, ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'], 2022, true));

// Buscar filme cod.: 3
const cod3 = funcoes.buscarFilme(catalogo, 3);

// Alterar status filme 4
const cod4 = funcoes.buscarFilme(catalogo, 4);
funcoes.alterarStatusEmCartaz(catalogo, 4)
console.log(`Filme encontrado: ${cod4.titulo} - Em cartaz? ${cod4.emCartaz}`);

// Salvar catalogo em arquivo na pasta database     ---        formatacao: 2 espacos    
fs.writeFileSync('./database/catalogo.json', JSON.stringify(catalogo, null, 2));
