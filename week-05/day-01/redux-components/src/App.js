import React from 'react';
import './App.css';
import Increaser from './components/increaser'
import Decreaser from './components/decreaser'
import Resetter from './components/resetter'
import Setter from './components/setter'
import Tags from './components/tags'
import AddTag from './components/addTag';
import RemoveTag from './components/removeTag';
import RemoveAllTag from './components/removeAllTag'
import ComplexCounter from './components/complexCounter'
import AsyncIncrementer from './components/async-incrementer'


function App() {
  return (
    <div className="App">
      <div className="line">
        <Increaser />
        <Decreaser />
        <Resetter />
        <Setter />
      </div>
      <div className="line">
        <Tags />
        <AddTag />
        <ComplexCounter />
        <RemoveTag />
        <RemoveAllTag />
      </div>
      <div className="line">
        <AsyncIncrementer />
      </div>
    </div>
  );
}

export default App;
