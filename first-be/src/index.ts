import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import cors from "cors"
import connectMongoose from './utils/connectMongoose';
import * as dotenv from "dotenv"
const app = express();
const PORT = process.env.PORT || 3005;



const main = async ()=>{
    dotenv.config()
    await connectMongoose()
    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    
    app.use("/api",router)
    


// Routes
app.get('/', (req, res) => {
    
    res.send('Hello, TypeScript & Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

}

main()