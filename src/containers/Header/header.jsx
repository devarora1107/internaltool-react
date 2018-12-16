/* eslint-disable no-unused-vars */
import React from 'react'
import {Navbar,NavItem,NavDropdown,MenuItem,Nav} from 'react-bootstrap'
import navigationItem from './navbaritem'
import './index.css'
import {Menu} from 'semantic-ui-react'
const Header =(props)=>{
    const {
        activeKey,
        handleHomeClick,
        handleOrderClick,
        handleDeliveryClick,
        handlePaymentClick,
        handleItemsClick,
        handlePartyClick,
        handlePromotionsClick,
        handleEmployeesClick,
        handleAnalyticsClick,
        handleProfileClick,
        handleChangePasswordClick,
        handleLogoutClick,
        handleSelect,
        
        

    }=props
    
    return (
        <Menu color='blue' fluid fixed="top" size='large' borderless style={{ zIndex: 700,backgroundColor:'#f5f5f5'}}  className='header-asda'>
            
            
                {navigationItem.map(item=>{
                    return (
                        <Menu.Item
                            name={item.eventKey}
                            active={activeKey===item.eventKey}
                            onClick={handleSelect}
        >{item.title}
        </Menu.Item>
                    )
                })}
                <NavDropdown eventKey={10} title='Account' id="basic-nav-dropdown">
                    <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                    <MenuItem onClick={handleChangePasswordClick}>Change Password</MenuItem>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </NavDropdown>
            
            
        </Menu>
    )

}

export default Header