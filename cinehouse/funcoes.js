/* eslint-disable no-unused-vars */

// Importar fs
const fs = require("fs");

module.exports = {
  // Adiciona filme ao catalogo
  adicionarFilme: function (catalogo, filme) {
    catalogo.push(filme);
  },

  // Adiciona filme catalogo ao arquivo
  adicionarFilmeDB: function (arquivo, catalogo) {
    fs.writeFileSync(arquivo, JSON.stringify(catalogo, null, 2));
  },

  // Funcao para buscar filme pelo codigo
  buscarFilme: function (catalogo = [], codigo = 0) {
    for (const filme of catalogo) {
      if (filme.codigo === codigo) {
        return filme;
      }
    }
  },

  // Alterar status do filme
  alterarStatusEmCartaz: function (catalogo, codigo) {
    const filmeAlterar = this.buscarFilme(catalogo, codigo);
    filmeAlterar.emCartaz = !filmeAlterar.emCartaz;
  },
};
