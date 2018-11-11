import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import{reducer as formReducer} from 'redux-form'
export default combineReducers({
    routing:routerReducer,
    toastr:toastrReducer,
    form: formReducer,
    
})



