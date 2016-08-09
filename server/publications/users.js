//No content yet
Meteor.publish("currentUserData", function(){
  return Meteor.users.find({_id: this.userId}, { fields: { profile: 1}});
});
