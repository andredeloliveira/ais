import Produtos from '/imports/collections/produtos';
Meteor.startup( () => {
  if (Produtos.find({}).fetch().length === 0) {
    Produtos.insert({
      nome: 'CardBoard',
      preco: '50.00',
      peso: '250',
      cores: ['unica'],
      backgroundUrl: ''
    })
  }
});
