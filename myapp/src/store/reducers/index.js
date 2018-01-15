import { combineReducers } from 'redux';
import Mine from './Mine.js';
import Home from './Home.js';
import JingCai from './JingCai.js';
const RooteReducer = combineReducers({
    Mine,
    Home,
    JingCai
});
export default RooteReducer;