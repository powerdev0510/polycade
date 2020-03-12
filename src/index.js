import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(reducers,applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

function App() {
    return (
    <Provider store={store}>
        <div className="App">
            <Main />
        </div>
    </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
