import React from 'react'
import LoginComponent from '../../components/Login/index'
import {saveUserSession} from '../../utils/localStorageUtil'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.onSubmitClick=this.onSubmitClick.bind(this)
        this.onEmailIdChange=this.onEmailIdChange.bind(this)
        this.onPasswordChange=this.onPasswordChange.bind(this)

        this.state={
            emailId:'',
            password:''
        }
    }
    onEmailIdChange(e){
        this.setState({emailId:e.target.value})
    }
    onPasswordChange(e){
        this.setState({password:e.target.value})

    }
    onSubmitClick(){
        
        const email=this.state.emailId
        const password=this.state.password
        alert(email)
        if (email=='devansh@classplus.co' && password=='Admin@123'){
            this.props.handler(true)
        }
    }
    render(){
        console.log(this.props)
        return(
            
            <LoginComponent 
                className='custom-margin-bottom'
                emailId={this.state.emailId}
                password={this.state.password}
                onSubmitClick={this.onSubmitClick}
                onEmailIdChange={this.onEmailIdChange}
                onPasswordChange={this.onPasswordChange}
            
            />

        )
    }

}


export default Login