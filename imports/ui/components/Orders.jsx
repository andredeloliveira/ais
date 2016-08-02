import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Pedidos from '../../collections/orders';

export default class Orders extends Component {

  renderPedidos() {
    let pedidos = Pedidos.find({}).fetch();
    if (pedidos.length === 0) {
      return (<h3 className="grey-text">Nenhum pedido efetuado</h3>)
    }
    return pedidos.map((pedido) => {
      return (
        <div>
          <p>pedido._id</p>
          <p>pedido._valor</p>
          <p>pedido.status</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <h4 className="grey-text">Meus pedidos</h4>
        {this.renderPedidos()}
      </div>
    );
  }

}
