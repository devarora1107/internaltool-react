import React from 'react'
import DashBoardComponent from '../../components/DashBoard'
class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filterDays:null,
            filterNumber:null,
        }
    }
    render(){
        return(
            <DashBoardComponent/>
        )
    }
}
export default DashBoard