import React from 'react'
import {Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const SideBar =(props)=>{
    const{
        activeItem,
        handleItemClick
    }=props

    
    return (
        <Menu pointing secondary vertical>
            <Menu.Item name='itemList' active={activeItem === 'itemList'} onClick={handleItemClick} >
                Item List
            </Menu.Item>
            <Menu.Item
            name='newItem'
            active={activeItem === 'newItem'}
            onClick={handleItemClick}
            >
                Add New Item
            </Menu.Item>

            
            <Menu.Item
            name='deleteItem'
            active={activeItem === 'deleteItem'}
            onClick={handleItemClick}
            >
                Delete Item
            </Menu.Item>
        </Menu>
 
    )
}

export default withRouter(connect(undefined)(SideBar))