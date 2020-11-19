import React, { Component } from 'react';
import './App.css';
// import LogIn from './components/login';
import Messages from './components/messages';


class App extends Component {
  render(){
  return (
    <div>
     {/* <Login/> */}
     <Messages/>
    </div> 
  );
 }
}
export default App;
