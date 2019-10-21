import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
  })

store.dispatch({type: 'SET', amount: 6});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE', amount: 2});
store.dispatch({type: 'RESET'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE', amount: 4});

unsubscribe()
ReactDOM.render(<App />, document.getElementById('root'));

