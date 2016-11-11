import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ProductItem } from './ProductItem';
import AISLoading from './AISLoading';
import Produtos from '../../collections/produtos';

export  class Home extends Component {
  produtos() {
    return this.props.produtos.map( (produto) => {
      return <ProductItem product={produto} key={produto._id} />
    });
  }
  render() {
    let { isReady } = this.props;
    return (
      <div>
        {isReady ? this.produtos() : <AISLoading/>}
      </div>
    );
  }

}

export default produtosContainer = createContainer( () => {
  let produtosSubs = Meteor.subscribe('getProdutos', 'ALL');
  const produtos = Produtos.find({}).fetch();
  return {
    produtos: produtos,
    isReady: produtosSubs.ready()
  }
}, Home);
