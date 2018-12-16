import React from 'react'
import Items from './items'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class ItemsContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <Items/>
        )
    }s
}

export default withRouter(connect(undefined)(ItemsContainer))