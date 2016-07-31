import React, { Component } from 'react';
import ItemCarrinho from './ItemCarrinho';

export default class Checkout extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col s12">
        <h3 className="grey-text">Carrinho</h3>
        </div>
          <table>
            <thead>
              <tr>
              <th data-field="id">Produto</th>
              <th data-field="price">Preço</th>
              <th data-field="quantidade">Quantidade</th>
              <th data-field="total">Total</th>
              </tr>
            </thead>
            <tbody>
              <ItemCarrinho produto={'leite'} preco={100} />
            </tbody>
          </table>
          <button className="waves-effect waves-light btn-large right">Finalizar</button>
        </div>
      </div>
    );
  }

}
