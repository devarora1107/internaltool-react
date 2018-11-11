import {all} from 'redux-saga/effects'
import { loginWatcher,logoutWatcher, clearStateWatcher } from '../containers/PersistStore/saga';
import {submitLoginWatcher} from '../containers/Login/saga'
export default function* rootSaga(){
    yield all([
        loginWatcher(),
        logoutWatcher(),
        clearStateWatcher(),
        submitLoginWatcher(),

    ])
}