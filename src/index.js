import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';
import './socket/socket';

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
