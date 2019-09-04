import { reducers } from './swapi';
import { combineReducers } from 'redux';

export default combineReducers({
  swapi: reducers.swapiReducer
});
