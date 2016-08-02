import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class OrdersButton extends Component {
  goToOrders() {
    FlowRouter.go('orders')
    $('#optionsModal').closeModal();
  }

  render() {
    const iconStyle = {
      fontSize: '1.3em',
    }
    const buttonStyle = {
      width: "100%",
      marginBottom: "10px"
    }
    return (
      <button style={buttonStyle} className="waves-effect waves-light btn"
              aria-label="Carrinho de compras"
              onClick={this.goToOrders}>
        <i style={iconStyle} className="fa fa-shopping-bag"></i>
         pedidos
      </button>
    );
  }
}
