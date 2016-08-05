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
        'profile': profile
      }
    })
  }
});
