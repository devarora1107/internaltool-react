import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import {loadState} from '../../../utils/localStorageUtil'
export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('session')
  console.log(isAuthenticated)
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
          )
      )}
    />);
}
