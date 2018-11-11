import {
    LOG_IN,
    LOG_OUT,
    STORE_DATA,
    UPDATE_USER_DATA,
    UPDATE_ACCESS_TOKEN,
    CLEAR_STATE
}  from './constants'

export function loginUser(payload){
    return {
        type:LOG_IN,
        payload,
    }
}
export function logutUser(){
    return {
        type:LOG_OUT,
    }
}
export function storeData(payload){
    return {
        type:STORE_DATA,
        payload,
    }
}
export function updateUser(userData){
    return {
        type:UPDATE_USER_DATA,
        userData,
    }
}
export function clearState(){
    return {
        type:CLEAR_STATE,
    }
}