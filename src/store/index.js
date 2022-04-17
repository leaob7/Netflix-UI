import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extensions';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;
