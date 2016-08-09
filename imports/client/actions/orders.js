export function createOrder(userId, productsId)  {
  Meteor.call('createOrder', (error, result) => {
    if (error) {
      console.log(error);
    }
  });
  return {
    type: 'CREATE_ORDER',
    payload: 'Pedido criado com sucesso!'
  }
}
