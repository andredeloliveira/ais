import React, { Component } from 'react';

export default class OptionsModal extends Component {

  render() {
    modalStyle = {
      width: "100%",
      height: "100%"
    };
    return (
      <div id="optionsModal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}
