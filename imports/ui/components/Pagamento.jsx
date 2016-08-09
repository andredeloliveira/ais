import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { emitirPagamento } from '/imports/client/actions/pagamentos';
import AISLoading from './AISLoading';
export default class Pagamento extends Component {
  componentWillMount() {
    this.props.dispatch(emitirPagamento(this.props.dispatch))
  }
  botaoPagSeguro() {
    return (
    <form action="https://pagseguro.uol.com.br/checkout/v2/cart.html?action=add" method="post">
      <input type="hidden" name="itemCode" value="B8D4765A888898D99428AF9069C8EE53" />
      <input type="hidden" name="iot" value="button" />
      <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/pagamentos/209x48-comprar-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
    </form>
    )
  }
  render() {
    let { pagamentoReducer } = this.props;
    let pagSeguroURL = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=';
    const anchorStyle = {
      width: "100%"
    };
    if (pagamentoReducer.paymentCode) {
      const parsedCode = JSON.parse(pagamentoReducer.paymentCode);
      pagSeguroURL = pagSeguroURL + parsedCode.checkout.code;
    }
    return (
      <div>
        <p className="grey-text">Clique no botão para ser redirecionado à página de pagamentos</p>
          { pagamentoReducer.paymentCode ? <a style={anchorStyle} className="waves-effect waves-light btn-large" href={pagSeguroURL}>Pagar</a> : <AISLoading/>}
      </div>
    );
  }
}

export default ShoppingCartContainer = createContainer( () => {
  let currentUserId = Meteor.userId();
  let currentShoppingCart = ShoppingCart.find({userId: currentUserId});
  return {

  }
}, Pagamento)

function mapStateToProps(state) {
  return {
    pagamentoReducer: state.pagamentoReducer
  }
}

export default connect(mapStateToProps)(Pagamento);
