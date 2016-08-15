import Orders from '../../imports/collections/orders';

Meteor.publish("ordersByUser", function(){
  return Orders.find({userId: this.userId});
});
