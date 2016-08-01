import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ProductItem from './ProductItem';
//import Produtos from '../../collections/produtos'; we can't actually have collections living in the UI..

export default class Home extends Component {
  //NOTE for now, we are using a single product that is being rendered. Nothing really special until we can
  //have a fully working Redux arch to fulfill our needs
  render() {
    return (
      <div>
        <ProductItem/>
      </div>
    );
  }

}
