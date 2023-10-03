"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpDatabase = exports.connectionPool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../config");
const acces = {
    user: config_1.config.db.user,
    password: config_1.config.db.password,
    database: config_1.config.db.database,
    port: config_1.config.db.port
};
exports.connectionPool = promise_1.default.createPool(acces);
function setUpDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.default.createConnection(acces);
        const dropResult = yield connection.execute('DROP TABLE IF EXISTS entries;');
        console.log(dropResult);
        const createResult = yield connection.execute(`CREATE TABLE IF NOT EXISTS entries(
    id INTEGER NOT NULL PRIMARY KEY auto_increment,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL
  ) ENGINE=InnoDB;`);
        console.log(createResult);
    });
}
exports.setUpDatabase = setUpDatabase;
