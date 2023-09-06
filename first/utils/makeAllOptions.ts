type Args = {
    answer:string
    otherOptions:string[]
}

const makeAllOptions = ({answer,otherOptions}:Args)=>{
    const allOptions = [answer,...otherOptions]
    const allOptionsWithValues = allOptions.map((o)=>{
        return {o,order:Math.random()}
    })
    const res = allOptionsWithValues.sort((a,b)=>{
        return a.order-b.order
    }).map(o=>o.o)
    return res
}

export default makeAllOptions