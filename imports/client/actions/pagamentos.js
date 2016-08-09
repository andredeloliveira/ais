import { createOrder } from './orders';

export function emitirPagamento(dispatch, quantity) {
    Meteor.call("pagamento", quantity, function(error, result){
      if (error) {
        dispatch(pagamentoError(error))
      } else {
        dispatch(efetuarPagamento(result))
      }
    });
  return {
    type: 'REQUEST_PAYMENT_PENDING'
  }
}

export function efetuarPagamento(result) {
  return {
    type: 'REQUEST_PAYMENT_FULFILLED',
    payload: result
  }
}

export function pagamentoError(error) {
  return {
    type: 'REQUEST_PAYMENT_ERROR',
    error: error
  }
}
