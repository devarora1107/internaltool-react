import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeApiCall} from '../../ApiCalls/actions'
class ItemList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataLoaded:1
        }
        
        this.handleSuccess=this.handleSuccess.bind(this)
        this.fetchItemDetails=this.fetchItemDetails.bind(this)

    }
    componentDidMount(){
        
        
        this.fetchItemDetails()
    }
    handleSuccess(){
        
    }
    fetchItemDetails(){
        
       this.props.makeApiCall(
           '/items/itemList',
           'GET',
           undefined,
           this.handleSuccess

       )
    }
    
    render(){
        
        return (
            this.state.dataLoaded
        )
    }
}
function mapStateToProps(state){
    return state
}
export default withRouter(connect(undefined,{makeApiCall})(ItemList))