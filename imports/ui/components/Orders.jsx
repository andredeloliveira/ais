import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Orders from '/imports/collections/orders';

export  class UserOrders extends Component {
  ordersRender() {
    if (this.props.orders.length === 0) {
      return ( <tr><td>Não há pedidos</td></tr> );
    }
    return this.props.orders.map( (order) => {
      return (
        <tr>
          <td>{order.transactionCode}</td>
          <td>{order.status}</td>
        </tr>
      )
    })
  }
  render() {
    const { isReady } = this.props;
    return (
      <div className="container">
        <h4 className="grey-text">Meus pedidos</h4>
        <table>
          <thead>
            <tr>
            <th data-field="id">Código transação</th>
            <th data-field="price">Status</th>
            </tr>
          </thead>
          <tbody>
            {isReady ? this.ordersRender() : ''}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ordersContainer = createContainer( () => {
  const currentUserId = Meteor.userId();
  let ordersSub = Meteor.subscribe('ordersByUser');
  let orders = Orders.find({userId: currentUserId}).fetch();
  return {
    isReady: ordersSub.ready(),
    orders: orders
  }
}, UserOrders);
