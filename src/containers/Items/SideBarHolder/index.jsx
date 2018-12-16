import React from 'react'
import SideBar from './sidebar'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid } from 'semantic-ui-react'
import {Switch,Route} from 'react-router-dom'
import Loading from '../../../components/_custom/Loading'

import Loadable from 'react-loadable'

const LoadableItemList=Loadable({
    loader: () => import('../ItemList'),
    loading() {
      return <Loading />;
    },
    delay: 350
  });

const LoadableNewItem=Loadable({
    loader:()=> import('../AddNewItem'),
    loading() {
        return <Loading/>
    },
    delay:350
});
const LoadableDeleteItem=Loadable({
    loader:()=>import ('../DeleteItem'),
    loading(){
        return <Loading/>
    },
    delay:350
})
class SideBarHolder extends React.Component{


    constructor(props){
        super(props)
        this.state={
            activeItem:'itemList'
        }
        this.handleItemClick=this.handleItemClick.bind(this)
    }
    handleItemClick(e,{name}){
        if(this.state.activeItem!=name) {
        this.setState({
            activeItem:name
        })
    }
        //this.props.history.push(`/items/${name}`)
    }

    render(){
        // eslint-disable-next-line default-case
        const Component =()=>{switch(this.state.activeItem){
            case 'itemList':
                return <LoadableItemList/>
            case 'newItem':
                return <LoadableNewItem/>
            case 'deleteItem':
                return <LoadableDeleteItem/>

        }}
        return (
            
            <Grid >
                <Grid.Row columns={2}>
                <Grid.Column width={4} style={{marginTop:'60px'}}>
                <SideBar
                activeItem={this.state.activeItem}
                handleItemClick={this.handleItemClick}
                />
                </Grid.Column>
                <Grid.Column width={12} style={{marginTop:'60px'}}>
                
                    <Component/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            
        )
    }
}
function mapStateToProps(state){
    return state
    
}
export default withRouter(connect(mapStateToProps)(SideBarHolder))