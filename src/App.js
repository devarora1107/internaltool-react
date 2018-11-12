import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHolder from './containers/AppHolder'
import Loadable from 'react-loadable'
import {Switch,Route,Redirect } from 'react-router-dom'
import {Grid,Row,Col} from 'react-bootstrap'
import ReactLoading from 'react-loading'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ProtectedRoute from './components/_HOC/ProtectedRoute'


const Loading =props =>
props.pastDelay ?(
  <Grid>
    <Row>
      <Col>
        <ReactLoading type='spin' color='#fff' height={'20%'} width={'20%'}/>
      </Col>
    </Row>
  </Grid>
) :null;

const LoadableLoginContainer=Loadable ({
  loader:() => import('./containers/Login'),
  loading(){
    return <Loading/>
  },
  delay:350,}
)
const LoadableAppHolder =Loadable({
  loader:()=> import('./containers/AppHolder'),
  loading(){
    return <Loading/>
  },
  delay:350,}
)

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={LoadableLoginContainer}/>
          <ProtectedRoute exact path='/' component={LoadableAppHolder}/>
        </Switch>
          <ReduxToastr
            newestOnTop={false}
            preventDuplicates
            position='top-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
      </div>
    );
  }
}

export default App;
