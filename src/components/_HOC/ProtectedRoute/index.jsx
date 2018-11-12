import React from 'react'
import {Route,Redirect} from 'react-router-dom'
//import {loadState} from '../../../utils/localStorageUtil'
export default function ProtectedRoute({componment:Component, ...rest}){
    
    const isAuthenticated=localStorage.getItem('data')
    console.log(isAuthenticated)
    return (
        <Route
        {...rest}
        render={props => (
          false ? (
            <Component {...props} />
          ) : (
            < Redirect to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
            )
        )}
    />);


}