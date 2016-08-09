import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Retorno extends Component {

  render() {
    let transactionCode = FlowRouter.getQueryParam('pagSeguroId');
    let containerStyle = {
      marginBottom: "40px"
    }
    return (
      <div className="container">
        <h4>Compra efetuada com sucesso!</h4>
        <p>Sua código de transação é: <b>{transactionCode}</b></p>
        <p>Você deverá receber um e-mail em instantes com relação ao status do seu pagamento.
        Equanto isso, aproveite para conhecer nosso <a href="http://ambientesvirtuais.com">blog</a></p>
        <a href="/" className="waves-effect waves-light btn-large">Voltar à loja</a>
      </div>
    )
  }

}
