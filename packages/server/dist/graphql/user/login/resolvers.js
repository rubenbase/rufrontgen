"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const User_1 = require("../../../models/User");
const errorMessages_1 = require("../../../utils/validation/errorMessages");
const constants_1 = require("../../../constants");
const errorResponse = [
    {
        path: "email",
        message: errorMessages_1.invalidLogin
    }
];
exports.resolvers = {
    Mutation: {
        login: (_, { email, password }, { session, redis, req }) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return errorResponse;
            }
            if (!user.confirmed) {
                return [
                    {
                        path: "email",
                        message: errorMessages_1.confirmEmailError
                    }
                ];
            }
            if (user.forgotPasswordLocked) {
                return [
                    {
                        path: "email",
                        message: errorMessages_1.forgotPasswordLockedError
                    }
                ];
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                return errorResponse;
            }
            session.userId = user.id;
            if (req.sessionID) {
                yield redis.lpush(`${constants_1.userSessionIdPrefix}${user.id}`, req.sessionID);
            }
            return null;
        })
    }
};
//# sourceMappingURL=resolvers.js.map