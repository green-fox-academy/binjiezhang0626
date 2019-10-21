import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer'
import tagReducer from './reducers/tagReducer';

const rootReducer = combineReducers({ counter: counterReducer, tags: tagReducer })
const store = createStore(rootReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'SET', amount: 6 });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE', amount: 2 });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE', amount: 4 });
store.dispatch({ type: 'ADD_TAG', tag: 'blue' });
store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
store.dispatch({ type: 'ADD_TAG', tag: 'hipster' });
store.dispatch({ type: 'REMOVE_TAG', tag: 'blue' });
store.dispatch({ type: 'ADD_TAG', tag: 'bold' });
store.dispatch({ type: 'REMOVE_TAGS' });

unsubscribe()
ReactDOM.render(<App />, document.getElementById('root'));

