const initialState = {}

export default orderReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CREATE_ORDER':
      return {
        ...state,
        feedback: action.payload
      }
    default:
      return state;

  }
}
