import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Login from './Login';
import Signup from './SignUp';
import ShoppingCartButton from './ShoppingCartButton';
import OrdersButton from './OrdersButton';

export default class OptionsModal extends Component {
  //cd275555
  logout() {
    Meteor.logout((error) => {
      if (error) {
        console.log(error);
      }
    });
    $('#optionsModal').closeModal();
    FlowRouter.go('homepage')
  }
  render() {
    modalStyle = {
      width: "100%",
      height: "100%"
    };
    let { currentUser } = this.props;
      return (
        <div id="optionsModal" className="modal" style={modalStyle}>
          <div className="modal-content">
            <div className="row">
              <div className="col s12 m6">
                {currentUser ? <ShoppingCartButton/> : <Login/>}
              </div>
              <div className="col s12 m6">
                {currentUser ? <OrdersButton/> : <Signup/>}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="" className=" modal-action modal-close waves-effect waves-green btn left">Fechar</a>
            {currentUser ? <a href="" className="modal-action waves-effect waves-red btn right" onClick={this.logout}>Logout</a> : ''}
          </div>
        </div>
      );
  }
}

export default OptionsModalContainer = createContainer( () => {
  let currentUserId = Meteor.userId();
  return {
    currentUser: currentUserId,
  }
}, OptionsModal);
