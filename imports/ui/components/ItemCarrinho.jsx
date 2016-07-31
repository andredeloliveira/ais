import React, { Component } from 'react';

export default class ItemCarrinho extends Component {
  setTotal(preco, event) {
    console.log(preco);
     this.setState({
       total: preco * event.target.value
     })
    console.log(this.state.total);
  }

  render() {
    const { produto, preco } = this.props;
    const inputStyle = {
      width: "30px"
    };
    return (
      <tr>
        <td>{produto}</td>
        <td>{preco}</td>
        <td> <input type="number" name="quantidade" defaultValue="0" style={inputStyle} onChange={this.setTotal.bind(this, preco)}/></td>
        <td></td>
      </tr>
    );
  }
}
