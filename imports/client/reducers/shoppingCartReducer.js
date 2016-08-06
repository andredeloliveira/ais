export default function shoppingCartReducer(state = {}, action) {
  switch (action.type) {
    case 'addCartItem':
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;
  }
}
