import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
