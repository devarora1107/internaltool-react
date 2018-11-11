import React from 'react'
import {Route,Redirect} from 'react-router-dom'
export default function ProtectedRoute({componment:Component,...rest}){
    const isAuthenticated=localStorage.getItem('data')
    return (
        <Route
            {...rest}
            render={props=>(
                isAuthenticated ?(
                    <Component {...props}/>
                ):(
                    <Redirect to={{
                        pathname:'/login',
                        state:{from:props.location},
                    }}
                    />
                )
            )}
        />
    )


}