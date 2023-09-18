"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = async () => {
    console.log(process.env);
    const mongoURI = (process.env.MONGO_DB_URI ||
        "mongodb://root:root@localhost:27017/the_one?authSource=admin");
    console.log({ mongoURI });
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    await mongoose_1.default.connect(mongoURI, options);
};
exports.default = connectMongoose;
