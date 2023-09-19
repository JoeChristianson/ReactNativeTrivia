"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Question_1 = __importDefault(require("../../models/Question"));
const questionRoutes = express_1.default.Router();
questionRoutes.post("/", async (req, res) => {
    try {
        const body = req.body;
        const variables = { ...body, assigned: false };
        const question = await Question_1.default.create(variables);
        res.status(200).json({ success: true, question });
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ success: false });
    }
});
questionRoutes.get("/unassigned", async (req, res) => {
    try {
        const questions = await Question_1.default.find({ assigned: false });
        res.status(200).json({ success: true, questions });
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ success: false });
    }
});
questionRoutes.get("/assigned", async (req, res) => {
    try {
        const questions = await Question_1.default.find({ assigned: true });
        res.status(200).json({ success: true, questions });
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ success: false });
    }
});
exports.default = questionRoutes;
