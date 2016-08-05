
Meteor.methods({
  //tudo hardcoded pra testes, agora
  'pagamentoCartao':function(){
    console.log('called pagseguro object safely arrived', pagSeguro);
    return 'hehe';
  }
});
