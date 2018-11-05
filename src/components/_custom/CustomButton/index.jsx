import React from 'react'
import {Button} from 'react-bootstrap'

const CustomButton =(props)=>{
    const {
        bsStyle,
        onButtonClick,
        disabled,
        bsSize,
        active,
        buttonName,
        type

    }=props
    return (
        <Button 
            bsStyle={bsStyle}
            bsSize={bsSize}
            onClick={onButtonClick}
            active={active}
            disabled={disabled}
            type={type}
        >
            {buttonName}
        </Button>
    )
}
export default CustomButton