import logger from 'react-logger';
import thunk from 'redux-thunk';

/* TODO(andredeloliveira) finish redux arch into the next interaction. Much too little time for now*/

export default  produtoReducer = function(state = {}, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        id: action.payload
      }
  }
}
