import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Login from './Login';
import Signup from './SignUp';
import ShoppingCartButton from './ShoppingCartButton';
import OrdersButton from './OrdersButton';

export default class OptionsModal extends Component {

  render() {
    modalStyle = {
      width: "100%",
      height: "100%"
    };
    if (Meteor.userId()) {
      return (
        <div id="optionsModal" className="modal" style={modalStyle}>
          <div className="modal-content">
            <div className="row">
              <div className="col s12 m6">
                <ShoppingCartButton/>
              </div>
              <div className="col s12 m6">
                <OrdersButton/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn left">Fechar</a>
          </div>
        </div>
      );
    }
      return (
        <div id="optionsModal" className="modal" style={modalStyle}>
          <div className="modal-content">
            <div className="row">
              <div className="col s12 m6">
                <div className="card-panel white">
                  <Login/>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card-panel white">
                  <Signup/>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn left">Fechar</a>
          </div>
        </div>
      );
  }
}
