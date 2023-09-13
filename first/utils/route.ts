const route = (urlEnd:string,options?:{mockOrigin?:string})=>{
    const address = "http://172.16.1.44:3005"
    return address+urlEnd
}

export default route