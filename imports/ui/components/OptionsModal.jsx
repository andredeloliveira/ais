import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Login from './Login';
import Signup from './SignUp';
import Checkout from './Checkout';

export default class OptionsModal extends Component {

  render() {
    modalStyle = {
      width: "100%",
      height: "100%"
    };
    let currentUser = Meteor.userId();
    if (currentUser) {
      return (
        <Checkout/>
      )
    } else
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
