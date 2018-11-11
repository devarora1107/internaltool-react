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
        //const data=loadUserSession()
        //if(data &&data.emailId){
        //    this.setState({isAuthenticated:true})
        //    console.log(data)
        //}
        //console.log(data.emailId)
        const isAuthenticated=this.state.isAuthenticated
        if(!isAuthenticated){
            return(<Login handler={this.changeAuthentication}/>)
        }
        return (<DashBoard/>)
        
    }
}
export default AppHolder