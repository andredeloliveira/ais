import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class ShoppingCartButton extends Component {
  // No numbers yet..
  goToCarrinho() {
    FlowRouter.go('carrinho');
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
      <div>
        <button style={buttonStyle} className="waves-effect waves-light btn"
                aria-label="Carrinho de compras"
                onClick={this.goToCarrinho}>
          <i className="fa fa-shopping-cart" style={iconStyle}></i>
           carrinho
        </button>
      </div>

    );
  }
}
