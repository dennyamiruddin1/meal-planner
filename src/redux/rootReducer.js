import { combineReducers } from 'redux';

import foodReducer from './Food/food-reducer';


const rootReducer = combineReducers({
  food: foodReducer
});

export default rootReducer;