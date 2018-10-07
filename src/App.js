import React, { Component } from 'react';
import './App.css';
import Main from "./components/main";
import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <Navigation />
          </div>
          
          <div>
            <Main />
          </div>
      </div>
    );
  }
}



export default App;
