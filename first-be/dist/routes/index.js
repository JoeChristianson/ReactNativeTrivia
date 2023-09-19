"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getRandomQuestion_1 = __importDefault(require("../utils/getRandomQuestion"));
const Question_1 = __importDefault(require("../models/Question"));
const console_1 = require("console");
const User_1 = __importDefault(require("../models/User"));
const index_1 = __importDefault(require("./quiz/index"));
const question_1 = __importDefault(require("./question"));
const apiRouter = express_1.default.Router();
apiRouter.get("/all-questions", async (req, res) => {
    try {
        console.log("hitting");
        const allQuestions = await Question_1.default.find();
        console.log({ allQuestions });
        res.status(200).json({ allQuestions, success: true });
    }
    catch (err) {
        res.status(500).json({ success: false, error: console_1.error });
    }
});
apiRouter.get('/random-question', async (req, res) => {
    console.log("hit route");
    const question = await (0, getRandomQuestion_1.default)();
    console.log({ question });
    res.json({ question });
});
apiRouter.post("/add-question", async (req, res) => {
    try {
        const body = req.body;
        const { query, correctAnswer, otherOptions } = body;
        const question = new Question_1.default({ query, correctAnswer, otherOptions });
        await question.save();
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(500).json({ success: false });
    }
});
apiRouter.post("/register", async (req, res) => {
    try {
        console.log("hitting");
        const { username, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            throw new Error("passwords do not match");
        }
        const user = await User_1.default.create({ username, email, password });
        console.log({ user });
        res.status(200).json({ email, userId: "sdf", jwt: "oinsdfd" });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
apiRouter.post('/answer', async (req, res) => {
    try {
        const body = req.body;
        console.log({ body });
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(500).json({ success: true, error: err });
    }
});
apiRouter.use("/quiz", index_1.default);
apiRouter.use("/question", question_1.default);
exports.default = apiRouter;
