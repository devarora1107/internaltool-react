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
            
                <ControlLabel >{controlLabelValue}</ControlLabel>
            
                <FormControl
                    autoFocus
                    type={type}
                    onChange={onInputChange}
                    value={inputValue}
                    
                />
            
        </FormGroup>
    )
}
export default FormInputGroup