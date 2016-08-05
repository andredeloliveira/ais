import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';

//Note that the need for this package is new for Meteor 1.3.  If you are using an older version of Meteor, you'd use the React-Layout package
import { mount } from 'react-mounter';

//We also need to import all layouts and pages we'll be using for our routes
import { AppLayout } from '../../ui/layouts/AppLayout';
import Home from '../../ui/components/Home';
import Carrinho from '../../ui/components/Carrinho';
import Login from '../../ui/components/Login';
import SignUp from '../../ui/components/SignUp';
import Orders from '../../ui/components/Orders';
import Pagamento from '../../ui/components/Pagamento';

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/entrar', {
  name: 'login',
  action() {
    mount(AppLayout, {
      content: <Login/>
    });
  }
});

FlowRouter.route('/cadastro', {
  name: 'signup',
  action() {
    mount(AppLayout, {
      content: <SignUp/>
    });
  }
});

FlowRouter.route('/carrinho', {
  name: 'checkout',
  action() {
    mount(AppLayout, {
      content: <Carrinho/>
    });
  }
});

FlowRouter.route('/pedidos', {
  name: 'orders',
  action() {
    mount(AppLayout, {
      content: <Orders/>
    });
  }
});

FlowRouter.route('/pagamento', {
  name: 'pagamento',
  action() {
    mount(AppLayout, {
      content: <Pagamento/>
    });
  }
})
