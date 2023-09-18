"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AnswerAttemptSchema = new mongoose_1.default.Schema({
    question: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Question",
        require: true
    },
    guess: {
        type: String,
        require: true
    },
    correctAnswer: {
        type: String,
        require: true
    },
    success: {
        type: Boolean,
        require: true
    }
});
const AnswerAttempt = mongoose_1.default.model("AnswerAttempt", AnswerAttemptSchema);
exports.default = AnswerAttempt;
