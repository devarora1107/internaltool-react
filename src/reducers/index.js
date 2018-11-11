import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import userDetails from '../containers/Login/reducer'
export default combineReducers({
    routing:routerReducer,
    userDetails:userDetails
})



