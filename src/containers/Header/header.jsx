/* eslint-disable no-unused-vars */
import React from 'react'
import {Navbar,NavItem,NavDropdown,MenuItem,Nav} from 'react-bootstrap'
import navigationItem from './navbaritem'
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
        <Navbar className='navbar navbarExpandLg navbarLight bgLight' fixedTop fluid>
            <Navbar.Header onClick={handleHomeClick}>
                Vedimart
            </Navbar.Header>
            <Nav activeKey={activeKey} onSelect={handleSelect}>
                {navigationItem.map(item=>{
                    return (
                        <NavItem  eventKey={item.eventKey} navigation={item.navigation}>
                            {item.title}
                        </NavItem>
                    )
                })}
                <NavDropdown eventKey={9} title='Account' id="basic-nav-dropdown">
                    <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                    <MenuItem onClick={handleChangePasswordClick}>Change Password</MenuItem>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </NavDropdown>
            </Nav>
            
        </Navbar>
    )

}

export default Header