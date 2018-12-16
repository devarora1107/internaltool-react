import React from 'react'
import {Grid, Segment, Item} from 'semantic-ui-react'
import {Switch,Route} from 'react-router-dom'
import SideBarHolder from './SideBarHolder';
import Loadable from 'react-loadable'
import Loading from '../../components/_custom/Loading'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const LoadableItemList=Loadable({
    loader: () => import('./ItemList'),
    loading() {
      return <Loading />;
    },
    delay: 350
  });
const Items =(props)=>{


    return (
        <React.Fragment>
            <SideBarHolder/>
                
            
        </React.Fragment>
    )
}

export default withRouter(connect(undefined)(Items))