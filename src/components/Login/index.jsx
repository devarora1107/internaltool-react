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
        disabled

    }=props
    return(
            <div className='blackScreen'>
                <div className='whiteScreen'>
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
                        <Row >
                            <Col lg={4}></Col>
                            <Col lg={4}>
                                <CustomButton
                                    bsStyle='primary'
                                    onButtonClick={onSubmitClick}
                                    disabled={disabled}
                                    buttonName="Login"
                                />
                            </Col>
                        </Row>
                    </Form>
            </div>
            </div>
            
    )
}
export default LoginComponent