const pagSeguroLib = Npm.require('pagseguro-nodejs');
export default  pagSeguro = new pagSeguroLib({
  email: Meteor.settings.pag_seguro.email,
  token: Meteor.settings.pag_seguro.token,
  mode: pagSeguroLib.MODE_SANDBOX,
  debug: true
});
