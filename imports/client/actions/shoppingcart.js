export function addCartItem(productId) {
  let actionStateObject = {
    type: 'addCartItem',
    payload: 'Item added!'
  };
  Meteor.call('User.addCartItem', productId, (error) => {
    if (error) {
      actionStateObject.payload = error.reason;
    }
  });
  return actionStateObject;
}
