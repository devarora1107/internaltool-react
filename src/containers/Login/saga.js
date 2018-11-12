import {SUBMIT_LOG_IN} from './constants'
import {takeEvery,put,call,select} from 'redux-saga/effects'
import {saveState,loadState} from '../../utils/localStorageUtil'
import {push} from 'react-router-redux'
import axios from 'axios'
import {API_BASE_URL} from '../../config/Globals/Api'


function* SubmitLoginDetails(payload){
    console.log(payload)
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
                token:response.data.data.token,
                tokenExpiryTime:response.data.data.tokenExpirtyTime,
                user:user.data.data.user
            }
       }
        yield saveState({token:'token'})
        console.log('1 am here')
        yield put(push('/'))
    }
    catch(err){

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

        return response
    })
}
export function* submitLoginWatcher(){
    yield takeEvery(SUBMIT_LOG_IN,SubmitLoginDetails)
}