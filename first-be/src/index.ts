import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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
