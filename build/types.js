"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeDate = void 0;
const errors_1 = require("./errors");
class RangeDate {
    constructor(startDate, endDate) {
        if (!startDate || !endDate) {
            this._startDate = new Date();
            this._endDate = new Date();
        }
        else {
            this.validateDates(startDate, endDate);
            this._startDate = startDate;
            this._endDate = endDate;
        }
    }
    validateDates(first, second) {
        if (first >= second)
            throw new errors_1.DateRangeError('The first date must be before the second date');
    }
    set startDate(newDate) {
        this.validateDates(newDate, this._endDate);
        this._startDate = newDate;
    }
    set endDate(newDate) {
        this.validateDates(this._startDate, newDate);
        this._endDate = newDate;
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        return this._endDate;
    }
}
exports.RangeDate = RangeDate;
