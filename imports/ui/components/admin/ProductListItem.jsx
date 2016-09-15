import React, { Component } from 'react';

export default class ProductItem extends Component {

  removeProduct(productId, event) {
    event.preventDefault();
    console.log('product removed with id', productId);
  }

  editProduct(productId, event) {
    event.preventDefault();
    console.log('editing product with id', productId);
  }
  
  render() {
    let { product } = this.props;
    return (
      <tr key={product._id}>
        <td>{product.nome}</td>
        <td>{product.preco}</td>
        <td><a href="" onClick={this.removeProduct.bind(this, product._id)}><i className="fa fa-trash-o"></i></a></td>
        <td><a href="" onClick={this.editProduct.bind(this, product._id)}><i className="fa fa-pencil"></i></a></td>
      </tr>
    )
  }
}
