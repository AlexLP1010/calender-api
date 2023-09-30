"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const errorhandler_1 = require("./middlewares/errorhandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use('/api', routes_1.default);
app.use(errorhandler_1.errorHandler);
app.listen(PORT);
