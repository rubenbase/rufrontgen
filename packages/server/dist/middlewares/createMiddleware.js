"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = (middlewareFunc, resolverFunc) => (parent, args, context, info) => middlewareFunc(resolverFunc, parent, args, context, info);
//# sourceMappingURL=createMiddleware.js.map