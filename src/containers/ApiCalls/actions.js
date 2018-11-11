import {
    MAKE_API_CALL,
    SAVE_REMOTE_DATA,
    CLEAR_REMOTE_DATA,
    FETCH_REMOTE_DATA
        } from './constants'

export function makeApiCall(
    url,
    method,
    body,
    handleSuccess,
    handleError,
    preventToastr=false,
    config,
){
    return {
        type:MAKE_API_CALL,
        url,
        method,
        body,
        handleSuccess,
        handleError,
        preventToastr,
        config
    }
} 
