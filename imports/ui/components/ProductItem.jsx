import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class ProductItem extends Component {
  // TODO(andredeloliveira): For now it add a single product and redirects to checkout directly. Add redux to deal with multiple products
  buyItem() {
    console.log('userId on buyItem',Meteor.userId());
    if (Meteor.userId()) {
      FlowRouter.go('checkout');
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
    return (
      <div style={fistImageStyle}>
        <h3 className="white-text" style={firstParagraphStyle}>Uma nova perspectiva do mundo</h3>
        <h4 className="white-text">a apenas um clique de distância..</h4>
        <div style={buttonContainerStyle}>
          <button className="waves-effect waves-light btn-large" onClick={this.buyItem}>Comprar</button>
        </div>
      </div>
    );
  }

}
