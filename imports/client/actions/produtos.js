export default function addProduto(produto) {
  return () => {
    Meteor.call('addProduto', produto);
  }
}

export default function removeProduto(produtoId) {
  return () => {
    Meteor.call('removeProduto', produtoId);
  }
}
