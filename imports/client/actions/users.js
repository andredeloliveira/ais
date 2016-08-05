export function addProfileInfo(userId, profile) {
  Meteor.call('addProfileInfo', profile, (error) => {
    if (error) {
      console.log(error);
    }
  });
  return {
    type: 'addProfileInfo',
    payload: 'Perfil Atualizado!'
  }
}
