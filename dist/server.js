"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var AppError_1 = require("./errors/AppError");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message)
    });
});
app.listen(3333, function () { return console.log("Server is running in port 3333 🚀"); });
//# sourceMappingURL=server.js.map