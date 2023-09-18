"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("../models/Question"));
const getRandomQuestion = async () => {
    const results = await Question_1.default.aggregate([{ $sample: { size: 1 } }]).exec();
    return results[0];
};
exports.default = getRandomQuestion;
