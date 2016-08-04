export default shippingReducer = (state={}, action) => {
  if (typeof state === undefined) {
    return {};
  }
  switch (action.type) {
    case 'addProfileInfo':
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;
  }
}
