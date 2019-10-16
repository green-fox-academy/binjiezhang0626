import React from 'react';
import './styles.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Todo from './components/todo'
import Theme from './components/theme'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component = {Todo} exact/>
          <Route path="/theme" component = {Theme}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
