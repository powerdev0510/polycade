import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from "redux-thunk";
const devTools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, compose(applyMiddleware(thunk), devTools()));
store.subscribe(() => console.log(store.getState()));
export default store;
