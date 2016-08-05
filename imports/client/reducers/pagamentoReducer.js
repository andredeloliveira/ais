export default pagamentoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'pagamentoCartao':
      return {
        ...state,
        feedback: action.payload
      }
    default:
    return state;
  }
}
