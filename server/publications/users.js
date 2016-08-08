//No content yet
Meteor.publish("myShoppingCart", function(){
  return Meteor.users.find({_id: this.userId});
});
