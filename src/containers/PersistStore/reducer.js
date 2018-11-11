import {STORE_DATA,
        UPDATE_USER_DATA
        } from './constants'

export default function(state=null,action){
    switch(action.type){
        case STORE_DATA:
            return {
                ...state,
                ...action.payload
            }
        
        case UPDATE_USER_DATA:
            return {
                ...state,
                ...action.userData
            }
        default:
            return state
    }
}