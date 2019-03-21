import {combineReducers} from 'redux';

function list(state = [], action) {
  if (action.type === "GETPRODUCT") {
      return action.payload
  }
 
  return state
}

export default combineReducers({
  list
})