import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors())
app.use(bodyParser.json());


// Routes
app.use("/api",router)
app.get('/', (req, res) => {

    res.send('Hello, TypeScript & Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
