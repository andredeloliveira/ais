import { combineReducers } from 'redux';
import shippingReducer from './shippingReducer';
import pagamentoReducer from './pagamentoReducer';
import shoppingCartReducer from './shoppingCartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  shippingReducer,
  pagamentoReducer,
  shoppingCartReducer,
  orderReducer,
});

export default rootReducer;
