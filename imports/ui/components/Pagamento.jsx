import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import fazerPagamento from '/imports/client/actions/pagamentos';

export default class Pagamento extends Component {
  checkout() {
    this.props.dispatch(fazerPagamento())
    Materialize.toast('', 4000)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Só mais um passo para uma nova realidade</h4>
        <div className="container">
            <button onClick={this.checkout.bind(this)}>Pagar</button>
        </div>
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
