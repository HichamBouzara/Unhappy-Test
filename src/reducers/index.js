import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import cardReducer from './cardReducer';

export default combineReducers({
  errors: errorReducer,
  cards: cardReducer
});
