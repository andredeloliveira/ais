import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptionsModal from '../components/OptionsModal';
export const AppLayout = ({content}) => {
  let styles = { marginTop: "20px"}
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
