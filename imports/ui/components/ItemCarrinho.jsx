import React, { Component } from 'react';

export default class ItemCarrinho extends Component {
  componentWillMount() {
    this.setState({
      total: 1 * this.props.preco
    });
  }

  getTotal() {
    return this.state.total || this.props.preco
  }

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
        <td> <input type="number" name="quantidade" defaultValue="1" style={inputStyle} onChange={this.setTotal.bind(this, preco)}/></td>
        <td>{this.getTotal()}</td>
      </tr>
    );
  }
}
