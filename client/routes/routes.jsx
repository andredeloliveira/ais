import React from 'react';
import App from '/components/App';
import FlowRouter from 'meteor/kadira:flow-router';
import ReactLayout from 'meteor/kadira:react-layout';

FlowRouter.route('/', {
  name: 'home',
  actions() {
    renderLayoutWith(<Home/>);
  }
})

function renderLayoutWith(component) {
  ReactLayout.render(App,
    header: <Header/>
    content: component,
    footer: <Footer/>
  );
}
