import React from 'react'
import Login from '../../containers/Login'
import DashBoard from '../../containers/DashBoard'
import {loadUserSession} from '../../utils/localStorageUtil'
class AppHolder extends React.Component{
    constructor(props){
        super(props)
        console.log(loadUserSession())
        
        }
    
    
    render(){
        
        return (<DashBoard/>)
        
    }
}
export default AppHolder