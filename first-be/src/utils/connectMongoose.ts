import mongoose, { ConnectOptions } from "mongoose"

const connectMongoose = async ()=>{
    const mongoURI:string = (process.env.MONGO_DB_URI)||""
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    const res =    await mongoose.connect(mongoURI,options as ConnectOptions)
    console.log("mongoose connection",res)
}

export default connectMongoose