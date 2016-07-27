import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
export const AppLayout = ({content}) => {
  let styles = { marginTop: "20px"}
  return (
    <div>
      <Header/>
      <div className="layout-container" style={styles}>
        {content}
      </div>
      <Footer/>
    </div>
  );
}
