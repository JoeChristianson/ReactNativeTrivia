"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = async () => {
    const mongoURI = (process.env.MONGO_DB_URI) || "";
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    const res = await mongoose_1.default.connect(mongoURI, options);
    console.log("mongoose connection", res);
};
exports.default = connectMongoose;
