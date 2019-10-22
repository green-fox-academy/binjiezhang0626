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


function App() {
  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Resetter />
      <Setter />
      <Tags />
      <AddTag />
      <RemoveTag />
      <RemoveAllTag />
    </div>
  );
}

export default App;
