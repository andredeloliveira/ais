Meteor.methods({
  addShippingInfo(userId, endereco){
    Meteor.users.update({_id: userId}, {
      $addToSet: {
        'profile.endereco': endereco
      }
    })
  },
  addProfileInfo(userId, profile) {
    Meteor.users.update({_id: userId}, {
      'profile': profile
    })
  }
});
