import React from 'react';
import './App.css';
import Img from './img'
import bigImg from './bigImg'

class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="App">
        <div className="Screen">
          <div className="left"></div>
          <div className="bigImg">
              <div className="blackGlass">
                  <h3>Bas glacier d'Arolla, Arolla, Switzerland</h3>
                  <p>The bas glacier d'Arolla is impressive because it is raw, wild and harsh.</p>
              </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="Navigation">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
      
    )
  }
}


export default App;
