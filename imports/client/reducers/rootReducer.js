import { combineReducers } from 'redux';
import shippingReducer from './shippingReducer';
import pagamentoReducer from './pagamentoReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  shippingReducer,
  pagamentoReducer,
  shoppingCartReducer
});

export default rootReducer;
