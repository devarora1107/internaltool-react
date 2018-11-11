import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import userDetails from '../containers/Login/reducer'
export default combineReducers({
    routing:routerReducer,
    toastr:toastrReducer,
    userDetails:userDetails
})



