import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHolder from './containers/AppHolder'
import Loadable from 'react-loadable'



class App extends Component {
  
  render() {
    return (
      <div className="App">

        <AppHolder/>
      </div>
    );
  }
}

export default App;
