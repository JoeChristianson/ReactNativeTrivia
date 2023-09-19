"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeReactApp = (app, express) => {
    const path = require("path");
    const homePath = path.resolve(__dirname, "../../../web-app/build");
    app.use(express.static(path.resolve(__dirname, "../../../web-app/build")));
    app.get("*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "../../../web-app/build", "index.html"));
    });
};
exports.default = routeReactApp;
