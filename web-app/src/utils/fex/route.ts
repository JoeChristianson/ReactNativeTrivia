const route = (urlEnd:string,options?:{mockOrigin?:string})=>{
    const origin = options?.mockOrigin || window.location.origin
    if(origin==="http://localhost:3000"&&(!(urlEnd.indexOf("//")>0))){
        const res = "http://localhost:3005/"+urlEnd
        return res
    }else if(!(urlEnd.indexOf("//")>0)){
        const res = origin+"/"+urlEnd
        return res
    }

    return urlEnd
}

export default route