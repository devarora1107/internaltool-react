import {USER_DETAILS} from './constant'

export default function(state=null,action){
    switch(action.type){
        case USER_DETAILS:
        return {
            ...state,
            userName:action.userName,
            userEmail:action.userEmail,
            userType:action.userType,    //0 for admin 1 for order boy
        }
        default:
        return state;
    }
}