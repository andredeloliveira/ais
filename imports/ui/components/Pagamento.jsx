import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { bindActionCreators } from 'redux';
import { emitirPagamento } from '/imports/client/actions/pagamentos';
import AISLoading from './AISLoading';

export default class Pagamento extends Component {
  componentWillMount() {
    this.props.dispatch(emitirPagamento(this.props.dispatch))
  }
  render() {
    console.log('Props inside pagamento',this.props);
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
          { pagamentoReducer.paymentCode ? <a style={anchorStyle}
          className="waves-effect waves-light btn-large" href={pagSeguroURL}>Pagar</a> : <AISLoading/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pagamentoReducer: state.pagamentoReducer,
  }
}

export default connect(mapStateToProps)(Pagamento);
