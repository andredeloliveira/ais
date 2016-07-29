import React, { Component } from 'react';


export default class HamburguerMenu extends Component {

  componentDidMount() {
     $('.modal-trigger').leanModal();
  }

  render() {
    let linkStyle = {
      color: "#000"
    };
    let iconStyle = {
      fontSize: "2em"
    };
    return (
      <div>
        <ul className="right">
          <li>
            <a style={linkStyle}  className="modal-trigger" href="#optionsModal">
              <i className="fa fa-bars" style={iconStyle} ></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
