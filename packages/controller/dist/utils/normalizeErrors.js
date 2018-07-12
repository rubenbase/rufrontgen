export var normalizeErros = function (errors) {
    var errMap = {};
    errors.forEach(function (err) {
        errMap[err.path] = err.message;
    });
    return errMap;
};
//# sourceMappingURL=normalizeErrors.js.map