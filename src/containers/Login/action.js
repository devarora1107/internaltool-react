import {SUBMIT_LOG_IN,LOG_OUT,FORGOT_PASSWORD} from './constants'

export function submitLoginDetails(payload){
   
    return {
        type:SUBMIT_LOG_IN,
        payload:payload
    }
}
    
export function logout(){
    return{
        type:LOG_OUT
    }
}
export function forogotPassword(payload){
    return{
        type:FORGOT_PASSWORD,
        payload,

    }
}