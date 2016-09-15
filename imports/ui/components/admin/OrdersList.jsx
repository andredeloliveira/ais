import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Orders from '../../../collections/orders';
export default class OrdersList extends Component {
  removeOrder(orderId, event) {
    event.preventDefault();
    console.log('order removed with id', orderId);
  }
  editOrder(orderId, event) {
    event.preventDefault();
    console.log('editing order with id', orderId);
  }
  listAllOrders() {
    return this.props.orders.map( (order) => {
      return (
        <tr key={order._id}>
          <td>cliente</td>
          <td>total quem sabe</td>
          <td><a href="" onClick={this.removeOrder.bind(this, order._id)}><i className="fa fa-trash-o"></i></a></td>
          <td><a href="" onClick={this.editOrder.bind(this, order._id)}><i className="fa fa-pencil"></i></a></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table>
        <thead>
          <tr>
          <th data-field="id">Cliente</th>
          <th data-field="">Codigo</th>
          <th data-field="">etc</th>
          <th data-field="">etc</th>
          </tr>
        </thead>
        <tbody>
          { this.props.areOrdersReady ? this.listAllOrders() : 'carregando...'}
        </tbody>
        </table>
      </div>
    )
  }
}

export default ordersListContainer = createContainer( () => {
  const userId = Meteor.userId();
  let allOrdersSub = Meteor.subscribe("ordersByUser", userId);
  const orders = Orders.find({userId: userId});
  return {
    orders: orders,
    areOrdersReady: allOrdersSub.ready(),
  }

}, OrdersList);
