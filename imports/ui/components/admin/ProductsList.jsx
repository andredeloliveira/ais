import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ProductListItem from './ProductListItem';
import Produtos from '../../../collections/produtos';

export default class ProductsList extends Component {

  listAllProducts() {
    return this.props.products.map( (product, index) => {
      return (
        <ProductItem product=product key={index} />
      )
    })
  }

  render() {
    return (
      <div>
        <table>
        <thead>
          <tr>
          <th data-field="id">Produto</th>
          <th data-field="">Preço</th>
          <th data-field="">Excluir</th>
          <th data-field="">Editar</th>
          </tr>
        </thead>
        <tbody>
          { this.props.areProductsReady ? this.listAllProducts() : 'carregando...'}
        </tbody>
        </table>
      </div>
    )
  }
}

export default productsListContainer = createContainer( () => {

  let allProductsSub = Meteor.subscribe("allProducts");
  const products = Produtos.find().fetch();
  return {
    products: products,
    areProductsReady: allProductsSub.ready(),
  }

}, ProductsList)
