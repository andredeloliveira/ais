import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { addCartItem } from '/imports/client/actions/shoppingcart';

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
    let fistImageStyle = {
      background: "url('https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/caracomcardboard.jpg')",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
    let firstParagraphStyle = {
      margin: "0",
      padding: "17%",
    };
    let buttonContainerStyle = {
      marginLeft: "45%",
      paddingBottom: "45px"
    };
    const { product } =  this.props ;
    //TODO(andredeloliveira): Gather the data to change this..
    return (
      <div style={fistImageStyle}>
        <h3 className="white-text" style={firstParagraphStyle}>Uma nova perspectiva do mundo</h3>
        <h4 className="white-text">a apenas um clique de distância..</h4>
        <div style={buttonContainerStyle}>
          <button className="waves-effect waves-light btn-large" onClick={this.buyItem.bind(this, product._id)}>Comprar</button>
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
