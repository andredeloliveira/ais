Meteor.methods({
  addShippingInfo(userId, endereco){
    Meteor.users.update({_id: userId}, {
      $addToSet: {
        'profile.endereco': endereco
      }
    })
  },
  addProfileInfo(profile) {
    Meteor.users.update({_id: this.userId}, {
      $set: {
        'profile.nome': profile.nome,
        'profile.telefone': profile.telefone,
        'profile.endereco': profile.endereco
      }
    })
  },
  'User.addCartItem': function(productId) {
    Meteor.users.update({_id: this.userId}, {
      $addToSet: {
        'profile.shoppingCart': productId
      }
    });
  }
});
