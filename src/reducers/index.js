import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import{reducer as formReducer} from 'redux-form'
import persistStoreReducer from '../containers/PersistStore/reducer'
export default combineReducers({
    routing:routerReducer,
    toastr:toastrReducer,
    form: formReducer,
    persistedData: persistStoreReducer
    
})



