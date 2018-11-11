import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHolder from './containers/AppHolder'
import Loadable from 'react-loadable'
import {Switch,Route,Redirect} from 'react-router-dom'
import {Grid,Row,Col} from 'react-bootstrap'
import ReactLoading from 'react-loading'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ProtectedRoute from './components/_HOC/ProtectedRoute'


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
