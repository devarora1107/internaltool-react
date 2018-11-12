import React from 'react'
import LoginComponent from '../../components/Login/index'
import {saveUserSession} from '../../utils/localStorageUtil'
import {submitLoginDetails} from './action'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
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
    onSubmitClick(e){
        
        
        const {history}=this.props
        const email=this.state.emailId
        const password=this.state.password
        const payload={
            email,
            password,
            
        }
        
        this.props.submitLoginDetails(payload)
        
    }

    render(){
        
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


export default withRouter(connect(undefined,{submitLoginDetails})(Login))