import pagSeguroLib from 'pagseguro-nodejs';

export default function fazerPagamento() {
  // por enquanto está client side pq o server não ta querendo executar
  pagSeguro = new pagSeguroLib({
    email: Meteor.settings.public.pag_seguro.email,
    token: Meteor.settings.public.pag_seguro.token,
    mode: pagSeguroLib.MODE_SANDBOX,
    debug: true
  });
  
  return {
    type: 'pagamentoCartao',
    payload: 'chamada feita com sucesso. Redux working, It seems you have got it '
  }
}
