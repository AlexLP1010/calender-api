"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, _req, res, _next) {
    const clientErrors = [
        'DateRangeError',
        'MisingOrInvalidData'
    ];
    if (clientErrors.includes(err.name)) {
        res.status(400);
        res.send({ error: err.message });
    }
    res.status(500);
    res.send({ error: 'Something went wrong' });
}
exports.errorHandler = errorHandler;
