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
exports.removeEntry = exports.getOneEntries = exports.getAllEntries = exports.updateEntry = exports.createEntry = void 0;
const calender_1 = require("../db/calender");
function createEntry(entry) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, calender_1.save)(entry);
        return result;
    });
}
exports.createEntry = createEntry;
function updateEntry(id, entry) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, calender_1.update)(id, entry);
        return result;
    });
}
exports.updateEntry = updateEntry;
function getAllEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, calender_1.getAll)();
        return result;
    });
}
exports.getAllEntries = getAllEntries;
function getOneEntries(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, calender_1.getOne)(id);
        return result;
    });
}
exports.getOneEntries = getOneEntries;
function removeEntry(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, calender_1.remove)(id);
        return result;
    });
}
exports.removeEntry = removeEntry;
