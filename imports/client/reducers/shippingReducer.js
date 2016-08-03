export default shippingReducer = (state={}, action) => {
  if (typeof state === undefined) {
    return {};
  }
  switch (action.type) {
    case 'addShippingInfo':
      return {
        ...state,
        id: action.payload.id
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
