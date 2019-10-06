import { combineReducers } from 'redux';
import loading from './loading';
import articles from './articles';

const rootReducer = combineReducers({
  articles,
  loading,
});

export default rootReducer;
