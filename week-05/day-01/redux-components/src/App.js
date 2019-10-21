import React from 'react';
import './App.css';
import Increaser from './components/increaser'
import Decreaser from './components/decreaser'
import Resetter from './components/resetter'


function App() {
  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Resetter />
    </div>
  );
}

export default App;
