import {USER_DETAILS} from './constant'
import {base_url,api_key} from '../../config/Api'
export function loginUser(){
    
    const userName='request.data.userName'
    const userEmail='request.data.userEmail'
    const userType='request.data.userType'
    return {
        type:USER_DETAILS,
        userName,
        userEmail,
        userType
    }
}