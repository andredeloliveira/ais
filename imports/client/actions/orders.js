import Orders from '/imports/collections/orders';

export function createOrder(userId, transactionCode)  {
  Meteor.call('createOrder', userId, transactionCode, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
  return {
    type: 'CREATE_ORDER',
    payload: 'Pedido criado com sucesso!'
  }
}

export function fetchOrdersByUser() {
  let currentUserId = Meteor.userId();
  let orders = Orders.find({userId: currentUserId}).fetch();
  return {
    type: 'FETCH_ORDERS_REQUEST',
    payload: orders
  }
}
