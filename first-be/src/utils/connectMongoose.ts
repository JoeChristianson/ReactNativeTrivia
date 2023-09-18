import mongoose, { ConnectOptions } from "mongoose"

const connectMongoose = async ()=>{
    console.log(process.env)
    const mongoURI:string = (process.env.MONGO_DB_URI ||
        "mongodb://root:root@localhost:27017/the_one?authSource=admin")
    console.log({mongoURI})
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    await mongoose.connect(mongoURI,options as ConnectOptions)
}

export default connectMongoose