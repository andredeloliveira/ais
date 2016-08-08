import Produtos from '../../imports/collections/produtos';

Meteor.publish('getProdutos', function(filter, options) {
  switch (filter) {
    case 'ALL':
      return Produtos.find({}, options);
    case 'PROMOTION':
      return Produtos.find({ promotion: true }, options);
    default:
      return Produtos.find({},options);
  }
});

Meteor.publish('allProducts', function() {
  return Produtos.find({});
})
