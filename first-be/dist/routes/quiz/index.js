"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Question_1 = __importDefault(require("../../models/Question"));
const DailyQuiz_1 = __importDefault(require("../../models/DailyQuiz"));
const getDatesWithoutQuiz_1 = __importDefault(require("./helpers/getDatesWithoutQuiz"));
const quizRoutes = express_1.default.Router();
quizRoutes.get("/:date", async (req, res) => {
    try {
        const date = req.params.date;
        console.log({ date });
        const fixedDate = new Date(date);
        const quiz = await DailyQuiz_1.default.findOne({ date: fixedDate }).populate("questions");
        console.log({ quiz });
        res.status(200).json({ quiz });
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ success: false });
    }
});
quizRoutes.post("/", async (req, res) => {
    try {
        let { questions, date } = req.body;
        const newQuestions = [];
        if (questions.length !== 10) {
            throw new Error("Must have ten questions");
        }
        if (!date) {
            date = (await (0, getDatesWithoutQuiz_1.default)())[0];
        }
        for (let question of questions) {
            const newQuestion = await Question_1.default.create(question);
            newQuestions.push(newQuestion);
        }
        const quiz = await DailyQuiz_1.default.create({ date, questions: newQuestions });
        res.status(200).json({ success: true, quiz });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
quizRoutes.get("/missingQuizzes", async (req, res) => {
    try {
        const missingQuizzes = await (0, getDatesWithoutQuiz_1.default)();
        res.status(200).json({ success: true, missingQuizzes });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
exports.default = quizRoutes;
