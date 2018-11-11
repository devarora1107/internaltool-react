import {SUBMIT_LOG_IN,LOG_OUT,FORGOT_PASSWORD} from './constant'
import {base_url,api_key} from '../../config/Globals/Api'
export function submitLoginDetails(payload){
    return {
        type:SUBMIT_LOG_IN,
        payload,
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