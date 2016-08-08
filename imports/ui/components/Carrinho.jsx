import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import ItemCarrinho from './ItemCarrinho';
import Perfil from './Perfil';
import AISLoading from './AISLoading';
import Produtos from '../../collections/produtos';

export default class Carrinho extends Component {
  goToPagamento() {
    FlowRouter.go('pagamento');
  }
  shoppingCartItems() {
    return this.props.produtos.map( (produto) => {
      return <ItemCarrinho key={produto._id} produto={produto.nome} preco={produto.preco} />
    });
  }

  render() {
    let { isReady } = this.props;
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
              {isReady ? this.shoppingCartItems() : <AISLoading/>}
            </tbody>
          </table>
          <Perfil/>
          <button className="waves-effect waves-light btn-large right" onClick={this.goToPagamento}>Próximo</button>
        </div>
      </div>
    );
  }
}
export default shoppingCartContainer = createContainer( () => {
  if (Meteor.user()) {
    let currentUser = Meteor.user();
    let produtosSubscription = Meteor.subscribe('allProducts');
    console.log(currentUser)
    let produtos = currentUser.profile.shoppingCart.map( (produtoId) => {
      return Produtos.findOne(produtoId);
    });

    return {
      produtos: produtos,
      isReady: produtosSubscription.ready(),
      currentUser: currentUser
    }
  }
}, Carrinho);
