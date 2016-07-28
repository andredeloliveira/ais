import Produtos from '../imports/collections/produtos';

Meteor.methods({
  addProduto(produto) {
    // fazer uma validaçãozita aqui antes, mas por enquanto ta aqui
    const produtoId = Produtos.insert({
      produto
    });
    return produtoId;
  },
  removeProduto(produtoId) {
    Produtos.remove({_id: produtoId});
  },
  //not yet a product update...
});
