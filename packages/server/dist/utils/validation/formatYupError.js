"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupError = (err) => {
    const errors = [];
    err.inner.forEach(e => {
        errors.push({
            path: e.path,
            message: e.message
        });
    });
    return errors;
};
//# sourceMappingURL=formatYupError.js.map