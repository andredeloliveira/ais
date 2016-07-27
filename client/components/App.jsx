import React, { Component } from 'react';

export default class App extends Component  {
  //make the styles to work separately
  render() {
    return (
      <div>
        <div className="header">
          {this.props.header}
        </div>
        <div className="fluid-container container content">
          {this.props.content}
        </div>
        <div className="footer">
          {this.props.footer}
        </div>
      </div>
    );
  }

}
