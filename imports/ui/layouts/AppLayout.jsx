import React from 'react'
import { Provider } from 'react-redux';
import  Store  from '../../client/store/store';
import App from './App';
export const AppLayout = ({content}) => {
  let styles = { marginTop: "20px"}
  console.log('store',Store);
  return (
    <div>
      <Provider store={Store}>
        <App content={content}/>
      </Provider>
    </div>
  );
}
