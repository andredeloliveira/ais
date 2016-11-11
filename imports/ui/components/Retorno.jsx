import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createOrder } from '/imports/client/actions/orders';

export  class Retorno extends Component {
  componentWillMount() {
    let transactionCode = FlowRouter.getQueryParam('pagSeguroId');
    const { dispatch }  = this.props;
    const currentUserId = Meteor.userId();
    if (currentUserId) {
      dispatch(createOrder(currentUserId, transactionCode))
    }
  }

  render() {
    let transactionCode = FlowRouter.getQueryParam('pagSeguroId');
    let containerStyle = {
      marginBottom: "40px"
    }
    return (
      <div className="container">
        <h4>Compra efetuada com sucesso!</h4>
        <p>Seu código de transação é: <b>{transactionCode}</b></p>
        <p>Você deverá receber um e-mail em instantes com relação ao status do seu pagamento.
        Equanto isso, aproveite para conhecer nosso <a href="http://ambientesvirtuais.com">blog</a></p>
        <a href="/" className="waves-effect waves-light btn-large">Voltar à loja</a>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    orderReducer: state.orderReducer,
  }
}
export default connect(mapStateToProps)(Retorno);
