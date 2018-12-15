import React from 'react'
import Header from './header'

import {clearUserSession} from '../../utils/localStorageUtil'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import navigationItem from './navbaritem'
class HeaderContainer extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state={
            activeKey:0
        }
        
        this.handleProfileClick=this.handleProfileClick.bind(this)
        this.handleChangePasswordClick=this.handleChangePasswordClick.bind(this)
        this.handleLogoutClick=this.handleLogoutClick.bind(this)
        this.handleSelect=this.handleSelect.bind(this)

    }
    handleHomeClick(){
        this.setState({activeKey:1})
    }
    handleOrderClick(){
        this.setState({activeKey:2})
    }
    handleProfileClick(){

    }
    handleChangePasswordClick(){

    }
    handleLogoutClick(){
        clearUserSession()
    }

    handleSelect(key){
       
        this.setState({
            activeKey:key
        }
        )
        
        const url=navigationItem[key-1].navigation
        console.log(url)
        this.props.history.push(`${url}`)
    }
    
    render(){
        return (
            <Header
                navigationItem={navigationItem}
                handleProfileClick={this.handleProfileClick}
                handleChangePasswordClick={this.handleChangePasswordClick}
                handleLogoutClick={this.handleLogoutClick}
                handleSelect={this.handleSelect}
                activeKey={this.state.activeKey}
            
            
            />
        )
    }


}
function mapStateToProps(state){
    return state
}
export default withRouter(connect(mapStateToProps)(HeaderContainer))