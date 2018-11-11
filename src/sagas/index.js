import {all} from 'redux-saga/effects'
import { loginWatcher,logoutWatcher, clearStateWatcher } from '../containers/PersistStore/saga';
export default function* rootSage(){
    yield all([
        loginWatcher(),
        logoutWatcher(),
        clearStateWatcher()

    ])
}