import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Hello from "./components/helloWorld"
import Error from "./components/error"
import ErrorCode from "./components/errorCode"
import NotImplenent from "./components/notImplement"
import Navigation from "./components/navigation"



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component = {Hello} exact/>
        <Route path="/error" component = {Error} exact/>
        <Route path="/error/:errorcode" component = {ErrorCode}/>
        <Route component = {NotImplenent}/>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
