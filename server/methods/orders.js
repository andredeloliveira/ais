Meteor.methods({
  'createOrder':function(userId, productsId){
    Orders.insert({
      userId: userId,
      productsId: productsId
    })
  }
});
