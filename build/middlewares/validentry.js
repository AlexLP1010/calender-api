"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validEntry = void 0;
const errors_1 = require("../errors");
const types_1 = require("../types");
function validEntry(req, _res, next) {
    const { title, description, date } = req.body;
    if (!title || !description || !date) {
        next(new errors_1.MissingOrInvalidData('Some data is missing'));
    }
    const entry = {
        title,
        description,
        date: new types_1.RangeDate()
    };
    if (typeof date == 'string') {
        try {
            entry.date = new types_1.RangeDate(new Date(date), new Date(date));
        }
        catch (error) {
            next(error);
        }
    }
    else {
        try {
            if (!date.startDate || !date.endDate)
                next(new errors_1.MissingOrInvalidData('Some data is missing'));
            entry.date = new types_1.RangeDate(new Date(date.startDate), new Date(date.endDate));
        }
        catch (error) {
            next(error);
        }
    }
    req.body.entry = entry;
    next();
}
exports.validEntry = validEntry;
