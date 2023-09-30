"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingOrInvalidData = exports.DateRangeError = void 0;
class DateRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DateRangeError';
    }
}
exports.DateRangeError = DateRangeError;
class MissingOrInvalidData extends Error {
    constructor(message) {
        super(message);
        this.name = 'MisingOrInvalidData';
    }
}
exports.MissingOrInvalidData = MissingOrInvalidData;
