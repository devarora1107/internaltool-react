import {SUBMIT_LOG_IN} from './constants'
import {takeEvery,put,call,select} from 'redux-saga/effects'
import {saveState,loadState} from '../../utils/localStorageUtil'
import {push} from 'react-router-redux'
import axios from 'axios'
import {API_BASE_URL} from '../../config/Globals/Api'

import {toastr} from 'react-redux-toastr'
function* SubmitLoginDetails(payload){
    
    let data={
        email:payload.payload.email,
        password:payload.payload.password,

    }
    try{
        const response= yield call(
            callLoginApi,
            data
        );
        
        const user=yield call(
            getUser,
            response.data.token
        )
        const loginData={
            data:{
                token:response.data.token,
                //tokenExpiryTime:response.data.data.tokenExpirtyTime,
                user:user.data
            }
       }
        yield saveState(loginData)
        toastr.success('Login Successful')
        yield put(push('/'))
    }
    catch(err){
        toastr.error('Wrong Passwrd')
    }
}


function getUser(token){
    console.log(token)
    return axios(
        `http://localhost:8001/auth/user`,{
            method:'GET',
            headers:{
                'content-type': 'application/json',
                'x-access-token': token
            }
    }).then(response=>{
        return response
    })

}

function callLoginApi(data) {
    // const data = {
    //     email: 'engineering@classplus.co',
    //     password: 'classplus'
    // };
    
    return axios(`http://localhost:8001/auth/login`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(data)
    }).then(response => {
        if(response.data.status)
        return response
    })
}
export function* submitLoginWatcher(){
    yield takeEvery(SUBMIT_LOG_IN,SubmitLoginDetails)
}