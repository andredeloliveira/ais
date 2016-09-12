import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { addCartItem } from '/imports/client/actions/shoppingcart';
import Orders from '/imports/collections/orders';
import SlideShow from './SlideShow';
import CardBoardS from './CardBoardS';

export default class ProductItem extends Component {
  buyItem(produtoId, event) {
    event.preventDefault();
    let { dispatch, shoppingCartReducer } = this.props;
    if (Meteor.userId()) {
      dispatch(addCartItem(produtoId));
      Materialize.toast(shoppingCartReducer.feedback, 2000);
      FlowRouter.go('carrinho');
    } else {
      FlowRouter.go('login');
    }
  }
  render() {
    const firstParagraphStyle = {
      margin: "0",
      paddingBottom: "17%",
    };
    const buttonContainerStyle = {
      marginLeft: "45%",
      paddingBottom: "45px"
    };
    const textStyle = {
      fontSize: "2em",
      fontFamily: "'Raleway', sans-serif"
    }
    const priceStyle = {
      fontSize: "2.2em",
      fontFamily: "'Raleway', sans-serif",
      color: "green"
    }
    const { product } =  this.props ;

    return (
      <div className="row">
        <div className="col l6 m12 s12">
            <CardBoardS />
          <span style={textStyle}>
            Experimente realidade virtual de uma maneira divertida e acessível com o seu celular!
          </span>
          <div className="center">
            <div className="price-tag">
              <span style={priceStyle}>
                R$50,00
              </span>
            </div>
             <button className="waves-effect waves-light btn-large" onClick={this.buyItem.bind(this, product._id)}>Comprar</button>
          </div>
        </div>
        <div className="col l6 m12 s12" >
          <SlideShow />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCartReducer: state.shoppingCartReducer
  }
}

export default connect(mapStateToProps)(ProductItem)
