"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DailyQuiz_1 = __importDefault(require("../../../models/DailyQuiz"));
const getDatesWithoutQuiz = async () => {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0); // Set time to beginning of the day
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);
    const quizzes = await DailyQuiz_1.default.find({
        date: {
            $gte: startDate,
            $lte: endDate
        }
    }).select('date').lean();
    // Extract only the dates from the quizzes
    const quizDates = quizzes.map(q => {
        const date = new Date(q.date);
        return date.toISOString().split('T')[0];
    });
    // Check all dates from today to next 30 days
    let current = new Date(startDate);
    const missingDates = [];
    while (current <= endDate) {
        const currentDateStr = current.toISOString().split('T')[0];
        if (!quizDates.includes(currentDateStr)) {
            missingDates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    return missingDates;
};
exports.default = getDatesWithoutQuiz;
