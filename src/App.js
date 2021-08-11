import React from 'react';
import './App.css';
import LogIn from './components/login';
import Messages from './components/messages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


 const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LogIn}></Route>
          <Route path="/register" exact component={Messages}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
