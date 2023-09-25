"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Question_1 = __importDefault(require("../../models/Question"));
const DailyQuiz_1 = __importDefault(require("../../models/DailyQuiz"));
const getDatesWithoutQuiz_1 = __importDefault(require("./helpers/getDatesWithoutQuiz"));
const getTrimmedDate_1 = __importDefault(require("../../utils/date/getTrimmedDate"));
const quizRoutes = express_1.default.Router();
quizRoutes.get("/", async (req, res) => {
    try {
        const quizzes = await DailyQuiz_1.default.find();
        console.log({ quizzes });
        res.status(200).json({ quizzes });
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ success: false });
    }
});
quizRoutes.get("/:date", async (req, res) => {
    try {
        const dateString = req.params.date;
        const trimmedDate = (0, getTrimmedDate_1.default)({ dateString });
        console.log({ trimmedDate });
        const allQuizzes = await DailyQuiz_1.default.find();
        allQuizzes.forEach((q) => {
            const match = trimmedDate === q.trimmedDate;
            console.log("trimmedDateOfOne:", q.trimmedDate, ",match", match);
        });
        const quiz = await DailyQuiz_1.default.findOne({ trimmedDate }).populate("questions");
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
            const newQuestion = await Question_1.default.create({ ...question, assigned: true });
            newQuestions.push(newQuestion);
        }
        const trimmedDate = (0, getTrimmedDate_1.default)({ dateString: date });
        const quiz = await DailyQuiz_1.default.create({ date, trimmedDate, questions: newQuestions });
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
quizRoutes.post("/submit-build", async (req, res) => {
    try {
        console.log("working");
        const questionIds = req.body.questionIds;
        for (let questionId of questionIds) {
            const question = await Question_1.default.findById(questionId);
            if (question) {
                question.assigned = true;
                question.save();
            }
        }
        const date = (await (0, getDatesWithoutQuiz_1.default)())[0];
        const quiz = await DailyQuiz_1.default.create({ date, questions: questionIds });
        console.log({ quiz });
        res.status(200).json({ success: true, quiz });
    }
    catch (err) {
        res.status(500).json({ success: false });
    }
});
exports.default = quizRoutes;
