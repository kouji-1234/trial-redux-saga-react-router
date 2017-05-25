import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import {postsByReddit, selectedReddit} from './selectors';


export default combineReducers({
  counter,
  selectedReddit,
  postsByReddit,
  routing: routerReducer
});
