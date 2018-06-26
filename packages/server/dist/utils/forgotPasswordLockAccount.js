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
const removeAllUserSessions_1 = require("./removeAllUserSessions");
const User_1 = require("../models/User");
exports.forgotPasswordLockAccount = (userId, redis) => __awaiter(this, void 0, void 0, function* () {
    yield User_1.User.update({ id: userId }, { forgotPasswordLocked: true });
    removeAllUserSessions_1.removeAllUserSessions(userId, redis);
});
//# sourceMappingURL=forgotPasswordLockAccount.js.map