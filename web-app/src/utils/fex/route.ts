const route = (urlEnd:string,options?:{mockOrigin?:string})=>{
    const address = "http://localhost:3005"
    return address+urlEnd
}

export default route