export function addShippingInfo(userId, endereco) {
  Meteor.call('addShippingInfo', userId, endereco);
    return {
      type: 'addShippingInfo',
      payload: 'Endereço salvo com sucesso'
    }
}
