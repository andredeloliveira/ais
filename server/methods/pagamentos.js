const Future = Npm.require('fibers/future');
const parser = Npm.require('xml2json');

Meteor.methods({
  //tudo hardcoded pra testes, agora
  'pagamento':function(){
    import pagseguro from 'pagseguro';
    let pagSeguro = new pagseguro({
      email: Meteor.settings.pag_seguro.email,
      token: Meteor.settings.pag_seguro.token,
      mode: 'sandbox'
    });

    pagSeguro.currency('BRL');

    pagSeguro.addItem({
           id: 1,
           description: 'Descrição do primeiro produto',
           amount: "4230.00",
           quantity: 3,
           weight: 2342
    });
    pagSeguro.buyer({
        name: 'José Comprador',
        email: 'comprador@uol.com.br',
        phoneAreaCode: '51',
        phoneNumber: '12345678'
    });
    pagSeguro.shipping({
        type: 1,
        street: 'Rua Alameda dos Anjos',
        number: '367',
        complement: 'Apto 307',
        district: 'Parque da Lagoa',
        postalCode: '01452002',
        city: 'São Paulo',
        state: 'RS',
        country: 'BRA'
    });
    let future = new Future();
    pagSeguro.setRedirectURL("http://localhost:3000/retorno");
    pagSeguro.setNotificationURL("http://localhost:3000/notificacao");
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
