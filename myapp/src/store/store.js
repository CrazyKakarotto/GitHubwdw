import { createStore } from 'redux';
import RooteReducer from './reducers';
const store = createStore(RooteReducer);
export default store;