import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './style.css';
import Board from './components/Board'
import { store } from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
);