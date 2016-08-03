import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptionsModal from '../components/OptionsModal';

export default class App extends Component {
  render() {
    let styles = { marginTop: "20px"}
    const { content } = this.props;
    return (
      <div>
          <Header/>
          <div className="layout-container" style={styles}>
            {content}
            <OptionsModal/>
          </div>
          <Footer/>
      </div>
    );
  }
}
