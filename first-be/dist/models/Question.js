"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuestionSchema = new mongoose_1.default.Schema({
    query: {
        type: String,
        require: true
    },
    correctAnswer: {
        type: String,
        require: true
    },
    otherOptions: [{
            type: String,
            require: true
        }],
    assigned: {
        type: Boolean,
        required: true
    },
    submitterName: {
        type: String,
        required: false
    },
    youtubeProfile: {
        type: String,
        required: false
    },
    xProfile: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    }
});
const Question = mongoose_1.default.model("Question", QuestionSchema);
exports.default = Question;
