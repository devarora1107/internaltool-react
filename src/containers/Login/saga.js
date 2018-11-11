import {SUBMIT_LOG} from './constants'
import {takeEvery,put,cal,select} from 'react-saga/effects'
import {saveState,loadState} from '../../utils/localStorageUtil'
import {push} from 'react-router-dom'
import axios from 'axios'
import {API_BASE_URL} from '../../config/Globals/Api'
import { SUBMIT_LOG_IN } from './constant';

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
            response.data.data.token
        )
        const loginData={
            data:{
                token:response.data.data.token,
                tokenExpiryTime:response.data.data.tokenExpirtyTime,
                user:user.data.data.user
            }
        }
        yield saveState(loginData)
        yield put(push('/'))
    }
    catch(err){

    }
}


function getUser(token){
    return axios(
        `http://localhost:8001/auth/user`,{
            method:'GET',
            headers:{
                'content-type': 'application/json',
            'x-access-token': token0
            }
    }).then(response=>{
        return response
    })

}
export function* submitLoginWatcher(){
    yield takeEvery(SUBMIT_LOG_IN,SubmitLoginDetails)
}