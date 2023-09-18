import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import connectMongoose from './utils/connectMongoose';
import * as dotenv from "dotenv"
import cors from "cors"
import routeReactApp from './utils/routeReactApp';

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors())
app.use(bodyParser.json());


const main = async ()=>{
    dotenv.config()
    await connectMongoose()
    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    
    app.use("/api",router)
    
    
    
    // Routes
    app.use("/api",router)

if(!(process.env.ENVIRONMENT==="dev")){
    routeReactApp(app,express)
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

}

main()