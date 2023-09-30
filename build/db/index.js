"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionPool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const acces = {
    user: (_a = process.env.DB_USER) !== null && _a !== void 0 ? _a : 'root',
    password: (_b = process.env.DB_PASSWORD) !== null && _b !== void 0 ? _b : 'root',
    database: (_c = process.env.DB_NAME) !== null && _c !== void 0 ? _c : 'calender',
    port: (_d = Number(process.env.DB_PORT)) !== null && _d !== void 0 ? _d : 3306
};
exports.connectionPool = promise_1.default.createPool(acces);
