export function saveUserSession(data){
    try{
        localStorage.setItem('session',JSON.stringify(data))
    }
    catch(err){

    }
}
export function clearUserSession(){
    try{
        localStorage.removeItem('session')
    }
    catch (err){

    }
}


export function loadUserSession(){
    try
    {
        const serializedData=localStorage.getItem('session')
    if(serializedData){
        return serializedData
    }}catch(err){
        return undefined
    }
    return undefined   
}
export default{
    saveState,
    loadState,
    clearState,
}