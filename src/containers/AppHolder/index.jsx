import React from 'react'
import Login from '../../containers/Login'
import DashBoard from '../../containers/DashBoard'
import {loadState} from '../../utils/localStorageUtil'
import './index.css'
import HeaderContainer from '../Header';
import axios from 'axios';
import {UPDATE_USER_DATA} from '../../config/Globals/Api'
import {updateUser} from '../PersistStore/actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import ItemsContainer from '../Items'
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading'
import {Row,Col} from 'react-bootstrap'
import {Grid,Container} from 'semantic-ui-react'

const Loading= (props)=>
  props.pastDelay ? (
    
      <Row>
        <Col>
          <ReactLoading type='spin' color='#fff' height={'20%'} width={'20%'}/>
        </Col>
      </Row>
    
  ):null;

  const LoadableItems = Loadable({
    loader: () => import('../Items'),
    loading() {
      return <Loading />;
    },
    delay: 350
  });
class AppHolder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            updateUser:true
        }
        this.updateUserDetails()
        
        }

    updateUserDetails(){
        let userDetails=loadState()
        console.log(loadState())
        this.state.updateUser &&
        axios.get(
            UPDATE_USER_DATA,{
            headers: {
                'X-Access-Token':loadState().data.token
            }
        }

        ).then(response=>{
            console.log(response)
            this.props.updateUser(response.data)
        }).catch(err=>{

        })
    } 
    render(){
        return (
            
            <React.Fragment>  
                
                    <HeaderContainer
                    />
                
                    <Switch>
                        <Route exact path='/items' component={LoadableItems}/>
                    </Switch>
                
            
            </React.Fragment>
        )
        
    }
}


function mapStateToProps({persistedData}){
    return {
        persistedData
    }
}
export default connect(mapStateToProps,{updateUser})(AppHolder)