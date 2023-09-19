const getTrimmedDate = ({dateString}:{dateString:string})=>{
const date = new Date(dateString)
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const year = date.getFullYear();

const formattedDate = `${year}-${month}-${day}`;
console.log({formattedDate})
return formattedDate
}

export default getTrimmedDate