export default shippingReducer = (state={}, action) => {
  if (typeof state === undefined) {
    return {};
  }
  switch (action.type) {
    case 'addShippingInfo':
      return {
        ...state,
        feedback: action.payload
      }
    case 'getShippingInfo':
      return {
        ...state,
        info: action.payload.info
      }
    default:
      return state;
  }
}
