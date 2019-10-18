import React from 'react';
import './App.css';
import Img from './img'
import BigImg from './bigImg'
import Navigation from './navigation';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }
  changeIndexOnClick = imgIndex => {
    this.setState({ index: imgIndex })
  }
  changeIndexClickLeft = () => {
    this.setState((currentState) => { return currentState.index === 0 ? ({ index: 6 }) : ({ index: currentState.index - 1 }) })
  }
  changeIndexClickRight = () => {
    this.setState((currentState) => { return currentState.index === 6 ? ({ index: 0 }) : ({ index: currentState.index + 1 }) })
  }
  render() {
    return (
      <div className="App">
        <div className="Screen">
          <div className="Bar">
            <div className="arrow" onClick={this.changeIndexClickLeft}></div>
          </div>
          <BigImg index={this.state.index} images={Img} />
          <div className="Bar">
            <div className="arrow right" onClick={this.changeIndexClickRight}></div>
          </div>
        </div>
        <Navigation changeIndexOnClick={this.changeIndexOnClick} />
      </div>

    )
  }
}


export default App;
