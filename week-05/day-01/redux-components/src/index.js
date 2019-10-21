import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducters/counterReducer'
import tagReducer from './reducters/tagReducer';
import { Provider } from 'react-redux'


const rootReducer = combineReducers({ counter: counterReducer, tags: tagReducer })
const store = createStore(rootReducer)

const subscribe = store.subscribe(() => {
    console.log(store.getState())
})

subscribe()

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));