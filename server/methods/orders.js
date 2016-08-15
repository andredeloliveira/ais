import Orders from '../../imports/collections/orders';
Meteor.methods({
  'createOrder': function(userId, transactionCode){
    //TODO(andredeloliveira): Add a Schema to avoid this recursive verifications every single insert unique;
    let existingOrders = Orders.find({transactionCode: transactionCode}).fetch();
    if (existingOrders.length === 0) {
      Orders.insert({
        userId: userId,
        transactionCode: transactionCode,
        status: 'Pedido processado'
      })
    }
  },
  'fetchOrdersByUser': function() {
    let orders = Orders.find({userId: this.userId}).fetch();
    console.log(orders);
    return orders;
  }
});
