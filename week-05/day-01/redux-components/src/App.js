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


function App() {
  return (
    <div className="App">
      <div className="line1">
        <Increaser />
        <Decreaser />
        <Resetter />
        <Setter />
      </div>
      <div className="line2">
        <Tags />
        <AddTag />
        <ComplexCounter />
        <RemoveTag />
        <RemoveAllTag />
      </div>
    </div>
  );
}

export default App;
