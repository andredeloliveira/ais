const initialState = {
  fetching: false,
  fetched: false,
  paymentCode: null,
  error: null
};

export default pagamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PAYMENT_PENDING':
      return {
        ...state,
        fetching: true
      }
    case 'REQUEST_PAYMENT_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        paymentCode: action.payload
      }
    case 'REQUEST_PAYMENT_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
