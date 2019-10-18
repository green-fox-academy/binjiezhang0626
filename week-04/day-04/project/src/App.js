import React from 'react';
import './App.css';
import Img from './img'
import BigImg from './bigImg'
import Navigation from './navigation';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {index:0}
  }
  changeIndex = imgIndex => {
    this.setState({index: imgIndex})
  }
  render() {
    return(
      <div className="App">
        <div className="Screen">
          <div className="left">
            <div className="arrow"></div>
          </div>
          <BigImg index={this.state.index} images={Img}/>
          <div className="right">
          <div className="arrow"></div>
          </div>
        </div>
        <Navigation changeIndex={this.changeIndex}/>
      </div>
      
    )
  }
}


export default App;
