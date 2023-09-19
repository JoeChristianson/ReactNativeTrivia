
// the type of the elements in the array is inconsequential in this function

const getScrambledAnswers = (questions:any[])=>{
    const res:any = []
    const remaining = [...questions]
    while (remaining.length>0){
        const index = Math.floor(Math.random()*remaining.length)
        const match = remaining.splice(index,1)
        res.push(...match)
    }
    console.log({res})
    return res
}

export default getScrambledAnswers