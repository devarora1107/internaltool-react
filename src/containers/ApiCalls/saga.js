import axios from 'axios'
import {takeEvery, put,call,select} from 'redux-saga/effects'
import {toastr} from 'react-redux-toastr'
import {MAKE_API_CALL} from './constants'
import {API_BASE_URL} from '../../config/Globals/Api'
import {loadState} from '../../utils/localStorageUtil'

function makeApiCall(method,url,data,{persistedStore}){
    let user=loadState()
    
    return axios({
        url,
        method,
        baseURL:API_BASE_URL,
        data,
        headers:{
            'content-type': 'application/json',
            'x-access-token':user.data.refreshToken
        }
    })
}

function* manageApiCall(action){
    const state=yield select();
    try{
        const response =yield call(makeApiCall,action.method,action.url,action.body,state)
        if(action.handleSuccess){
            yield call(action.handleSuccess,response.data);
        }

    }
    catch(err){
        if(err){
            toastr.error("ERROR",'you are not logged in')
        }
        else{
            if(!action.preventToastr){
                yield call(action.handleSuccess,err.config.data)
                toastr.error('ERROR','ERROR')

            }
            if(action.handleError){
                yield call(action.handleError,err.response);
            }
        }
    }
}
export function* apiCallWatcher() {
    yield takeEvery(MAKE_API_CALL,manageApiCall)
}

