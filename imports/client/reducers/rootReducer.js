import { combineReducers } from 'redux';
import shippingReducer from './shippingReducer';
import pagamentoReducer from './pagamentoReducer';

const rootReducer = combineReducers({
  shippingReducer,
  pagamentoReducer
});

export default rootReducer;
