const Future = Npm.require('fibers/future');
const parser = Npm.require('xml2json');
import { _ } from 'lodash';
import Produtos from '../../imports/collections/produtos';

Meteor.methods({
  //tudo hardcoded pra testes, agora
  'pagamento':function(quantity){
    import pagseguro from 'pagseguro';
    let pagSeguro = new pagseguro({
      email: Meteor.settings.pag_seguro_sandbox.email,
      token: Meteor.settings.pag_seguro_sandbox.token,
      mode: 'sandbox'
    });

    pagSeguro.currency('BRL');

    //get all Items from shoppingCart

    let currentUser = Meteor.users.findOne(this.userId);
    console.log(currentUser);
    let shoppingCartProdutos = currentUser.profile.shoppingCart.map( (produtoId) => {
      return Produtos.findOne(produtoId);
    });

    shoppingCartProdutos.forEach( (produto) => {
      pagSeguro.addItem({
        id: produto._id,
        description: produto.nome,
        amount: produto.preco,
        quantity: quantity,
        weight: 200
      });
    });

    pagSeguro.buyer({
        name: currentUser.profile.name,
        email: currentUserEmail,
        phoneAreaCode: currentUser.profile.telefone.ddd,
        phoneNumber: currentUser.profile.telefone.telefone
    });

    let currentUserEmail = '';
    if (currentUser.services.facebook) {
      currentUserEmail = currentUser.services.facebook.email;
    } else if (currentUser.services.google) {
      currentUserEmail = currentUser.services.google.email;
    } else {
      currentUserEmail = currentUser.emails[0].address;
    }
    pagSeguro.shipping({
        type: 1,
        street: currentUser.profile.endereco.rua,
        number: currentUser.profile.endereco.numero,
        complement: '',
        district: '',
        postalCode: '',
        city: currentUser.profile.endereco.cidade,
        state: currentUser.profile.endereco.estado,
        country: 'BRA',
        shippingCost: '10.00'
    });
    let future = new Future();
    pagSeguro.setRedirectURL("http://www.cardboards.com.br/retorno");
    pagSeguro.setNotificationURL("http://www.cardboards.com.br/notificacao");
    pagSeguro.send(function(err, res) {
       if (err) {
           future.return(error);
       } else {
        const json = parser.toJson(res);
        future.return(json);
       }
    });
    return future.wait();
  }
});
