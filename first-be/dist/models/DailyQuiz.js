"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DailyQuizSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        unique: true,
        required: true
    },
    questions: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Question"
        }]
});
const DailyQuiz = mongoose_1.default.model("DailyQuiz", DailyQuizSchema);
exports.default = DailyQuiz;
