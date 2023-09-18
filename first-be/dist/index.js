"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const connectMongoose_1 = __importDefault(require("./utils/connectMongoose"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routeReactApp_1 = __importDefault(require("./utils/routeReactApp"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const main = async () => {
    dotenv.config();
    await (0, connectMongoose_1.default)();
    // Middleware
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use("/api", routes_1.default);
    // Routes
    app.use("/api", routes_1.default);
    if (!(process.env.ENVIRONMENT === "dev")) {
        (0, routeReactApp_1.default)(app, express_1.default);
    }
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};
main();
