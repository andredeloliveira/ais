import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Pedidos from '../../collections/orders';

export default class Orders extends Component {

  renderPedidos() {
    let pedidos = this.props.pedidos
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

export default OrdersContainer = createContainer( () => {
  let currentUserId = Meteor.userId();
  let ordersSubscription = Meteor.subscribe('OrdersByUser', currentUserId);
  return {
    isReady: ordersSubscription.ready(),
    pedidos: Pedidos.find({}).fetch()
  }
}, Orders);
