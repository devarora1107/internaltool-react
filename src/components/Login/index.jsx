import React from 'react'
import {Grid,Row,Col,Label,Form,Button} from 'react-bootstrap'
import FormInputGroup from '../_custom/FormInputGroup'
import CustomButton from '../_custom/CustomButton'
import './index.css'
const LoginComponent =(props)=>{
    const {
        emailId,
        password,
        onSubmitClick,
        onEmailIdChange,
        onPasswordChange,
        disabled,
        className

    }=props
    return(<Grid className='center-block whiteScreen'>
            <div >
                    <h1 className='text-center'>Welcome</h1>
                    <Form >
                        <FormInputGroup 
                            
                            type="email"
                            onInputChange={onEmailIdChange}
                            size="large"
                            controlLabelValue="Email"
                            inputValue={emailId}
                            />
                        <FormInputGroup 
                        
                            type="password"
                            onInputChange={onPasswordChange}
                            size="large"
                            controlLabelValue="Password"
                            inputValue={password}
                            />
                        
                        <Button
                            bsStyle='primary'
                            bsSize='md'
                            onClick={onSubmitClick}
                            disabled={disabled}
                            className='login-button'
                        >
                            Login
                        </Button>
                            
                    </Form>
                
            </div></Grid>
            
            
    )
}
export default LoginComponent