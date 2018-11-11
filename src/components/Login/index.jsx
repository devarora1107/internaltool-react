import React from 'react'
import {Grid,Row,Col,Label,Form,Button} from 'react-bootstrap'
import FormInputGroup from '../_custom/FormInputGroup'
import CustomButton from '../_custom/CustomButton'

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
    return(<Grid className='whiteScreen'>
            <div >
                
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
                            onButtonClick={onSubmitClick}
                            disabled={disabled}
                            style={{margin:'0 120px'}}
                        >
                            Login
                        </Button>
                            
                    </Form>
                
            </div></Grid>
            
            
    )
}
export default LoginComponent