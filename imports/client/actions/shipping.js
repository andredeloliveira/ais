export function addShippingInfo(userId, endereco) {
  return () => {
   Meteor.call('addShippingInfo', userId, endereco);
  }  
}
