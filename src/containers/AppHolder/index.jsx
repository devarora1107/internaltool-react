import React from 'react'
import Login from '../../containers/Login'
import DashBoard from '../../containers/DashBoard'
import {loadUserSession} from '../../utils/localStorageUtil'
class AppHolder extends React.Component{
    constructor(props){
        super(props)
        this.changeAuthentication=this.changeAuthentication.bind(this)
        this.state={
            isAuthenticated:false
        }
    }
    changeAuthentication(data){
        this.setState({isAuthenticated:data})
    }
    render(){
        
        return (<DashBoard/>)
        
    }
}
export default AppHolder