import axios from 'axios'
import {takeEvery,put,call,select} from 'redux-saga/effects'
import {push} from 'react-router-redux'
import {toastr} from 'react-redux-toastr'
import config from '../../config/Globals/Api'
import {storeData,clearState} from './actions'
import localStorageUtil from '../../utils/localStorageUtil'

import {
    LOG_IN,
    LOG_OUT,
    CLEAR_STATE,
    UPDATE_USER_DATA,
    UPDATE_ACCESS_TOKEN,
    } from './constants'

function* storeLoginData(action){
    yield storeData(action.payload)
}
export function* loginWatcher() {
    yield takeEvery(LOG_IN,storeLoginData)
}
function* manageLogout(){
    const state =yield select();
    try {
        yield put(clearState())
    } catch(err){
        toastr.error("Error Something went wrong")
    }
}
export function* logoutWatcher(){
    yield takeEvery(LOG_OUT,manageLogout)
}
function* manageClearState(){
    yield window.fcWidget.destroy()
    yield clearState()
    yield put(push('/'))
}
export function* clearStateWatcher(){
    yield takeEvery(CLEAR_STATE,manageClearState)
}