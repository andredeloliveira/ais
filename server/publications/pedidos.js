import Orders  from '../../imports/collections/orders';

Meteor.publish('OrdersByUser', (userId) => {
  return Orders.find({userId: userId});
});
