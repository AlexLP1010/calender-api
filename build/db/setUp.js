"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const readline_1 = __importDefault(require("readline"));
const readInterface = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
readInterface.question(`Caution: This action errase all data of table 
"entries" of database. Are you surly to proced?(N/y) `, answare => {
    const afirmative = ['y', 'Y', 'yes', 'YES', 'Yes'];
    if (afirmative.includes(answare)) {
        (0, _1.setUpDatabase)().then(() => process.exit());
    }
    else {
        process.exit();
    }
});
