import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Login from './Login';
import Signup from './SignUp';
import ShoppingCartButton from './ShoppingCartButton';
import OrdersButton from './OrdersButton';

export  class OptionsModal extends Component {
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
      maxHeight: "100%"
    };
    let { currentUser } = this.props;
      return (
        <div id="optionsModal" className="modal" style={modalStyle}>
          <div className="modal-content">
          <div className="modal-footer">
            <a href="" className=" modal-action modal-close waves-effect waves-green red lighten-1 btn right">X</a>
            {currentUser ? <a href="" className="modal-action waves-effect waves-red red darken-1 btn right" onClick={this.logout}>sair</a> : ''}
          </div>
            <div className="row">
              <div className="col s12 m6">
                {currentUser ? <ShoppingCartButton/> : <Login/>}
              </div>
              <div className="col s12 m6">
                {currentUser ? <OrdersButton/> : <Signup/>}
              </div>
            </div>
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
