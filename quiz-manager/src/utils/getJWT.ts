const getJWT = ()=>{
    const json = window.sessionStorage.getItem("quiz-manager-cred")
    if(json===null){
        return
    }
    const cred = JSON.parse(json)
    return cred?.accessToken
}

export default getJWT