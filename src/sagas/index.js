import {all} from 'redux-saga/effects'
import { loginWatcher,logoutWatcher, clearStateWatcher } from '../containers/PersistStore/saga';
import {submitLoginWatcher} from '../containers/Login/saga'
import {apiCallWatcher} from '../containers/ApiCalls/saga'
export default function* rootSaga(){
    yield all([
        loginWatcher(),
        logoutWatcher(),
        clearStateWatcher(),
        submitLoginWatcher(),
        apiCallWatcher()
    ])
}