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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.save = exports.getOne = exports.getAll = void 0;
const _1 = require(".");
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield _1.connectionPool.query('SELECT * FROM entries;');
        return result;
    });
}
exports.getAll = getAll;
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield _1.connectionPool.query('SELECT * FROM entries WHERE id = ?;', [id]);
        return result;
    });
}
exports.getOne = getOne;
function save(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield _1.connectionPool.query('INSERT INTO entries VALUES(0, ?, ?, ?, ?)', [entry.title, entry.description, entry.date.startDate, entry.date.endDate]);
        return result;
    });
}
exports.save = save;
function update(id, entry) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield _1.connectionPool.query('UPDATE entries SET title = ?, description = ?, start_date = ?, end_date = ? WHERE id = ?', [entry.title, entry.description, entry.date.startDate, entry.date.endDate, id]);
        return result;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield _1.connectionPool.query('DELETE FROM entries WHERE id = ?', [id]);
        return result;
    });
}
exports.remove = remove;
