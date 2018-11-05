import React from 'react'
import {FormGroup,FormControl,ControlLabel,Col} from 'react-bootstrap'
const FormInputGroup=(props) =>{
    const {
        controlId,
        size,
        controlLabelValue,
        type,
        inputValue,
        onInputChange
    }=props
    return(
        <FormGroup controlId={controlId} bsSize={size}>
            <Col lg={3}>
                <ControlLabel>{controlLabelValue}</ControlLabel>
            </Col>
            <Col lg={9}>
                <FormControl
                    autoFocus
                    type={type}
                    onChange={onInputChange}
                    value={inputValue}
                    
                />
            </Col>
        </FormGroup>
    )
}
export default FormInputGroup