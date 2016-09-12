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
    const comprarStyle = {
      margin: "20px"
    }
    const textStyle = {
      fontSize: "2em",
      fontFamily: "'Raleway', sans-serif"
    }
    const priceStyle = {
      fontSize: "2.2em",
      fontFamily: "'Raleway', sans-serif",
      color: "green"
    }
    const titleStyle = {
      fontFamily: "'Raleway', sans-serif",
    }

    const mobileStyle = {
      fontSize: "3.5em",
    }

    const googlePlayStyle = {
      height: "90px",
      width:  "90px",
      margin: "20px"
    }


    const { product } =  this.props ;

    return (
      <div>
        <div className="row">
          <div className="col l6 m12 s12">
            <div className="center">
                <CardBoardS />
            </div>
            <span style={textStyle}>
              Experimente realidade virtual de uma maneira divertida e acessível com o seu celular!
            </span>
            <div className="center">
              <div className="price-tag">
                <span style={priceStyle}>
                  Compre agora por apenas R$50,00
                </span>
              </div>
               <button style={comprarStyle} className="waves-effect waves-light btn-large" onClick={this.buyItem.bind(this, product._id)}>Comprar</button>
            </div>
          </div>
          <div className="col l6 m12 s12" >
            <SlideShow />
          </div>
        </div>
        <div className="grey lighten-2 container">
          <hr />
        </div>
        <div className="row">
            <div className="col l12 m12 s12 center">
            <h3 style={titleStyle}> Especificações</h3>
            <i style={mobileStyle} className="fa fa-mobile"></i>
              <br />
              <ul style={textStyle}>
                <li>
                  - Se encaixa em celulares de até 6"
                </li>
                <li>
                  - Funciona com iPhones e dispositivos Android.
                </li>
                <li>
                  - Lentes biconvexas de 37 milímetros de diâmetro, com 50 milímetros Distância Focal.
                </li>
                <li>
                  - Novo botão condutor substitui o interruptor magnético da versão 1. funciona tanto em iOS e dispositivos Android.
                </li>
                <li>
                  - Inspirado pelo Google Cardboard v2.
                </li>
              </ul>
              <div className="center">
                <div className="price-tag">
                  <span style={priceStyle}>
                    Compre agora por apenas R$50,00
                  </span>
                </div>
                 <button style={comprarStyle} className="waves-effect waves-light btn-large" onClick={this.buyItem.bind(this, product._id)}>Comprar</button>
              </div>
            </div>
          </div>
          <div className="grey lighten-2 container">
            <hr />
          </div>
          <div className="row">
            <div className="center">
              <h3 style={titleStyle}>Seu cardboard não chegou ainda?</h3>
              <span style={textStyle}>
                Baixe o HologramAR e veja incríveis hologramas na sua frente
              </span>
              <div className="center">
                <a href="https://play.google.com/store/apps/details?id=com.AIS.HologramARcas">
                  <img style={googlePlayStyle} src="https://s3-sa-east-1.amazonaws.com/aisambientesdigitais/geral/google-play.png"
                    alt="Google Play Link" />
                </a>
                <br />
                <span className={textStyle}>HologramAR</span>
              </div>
            </div>
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
