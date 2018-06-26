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
const common_1 = require("@rufrontgen/common");
const User_1 = require("../../../models/User");
const formatYupError_1 = require("../../../utils/validation/formatYupError");
exports.resolvers = {
    Mutation: {
        register: (_, args) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield common_1.validUserSchema.validate(args, { abortEarly: false });
            }
            catch (err) {
                return formatYupError_1.formatYupError(err);
            }
            const { email, password, name, lastname } = args;
            const userAlreadyExists = yield User_1.User.findOne({
                where: { email },
                select: ["id"]
            });
            if (userAlreadyExists) {
                return [
                    {
                        path: "email",
                        message: "already taken"
                    }
                ];
            }
            const user = User_1.User.create({
                email,
                password,
                name,
                lastname
            });
            yield user.save();
            return null;
        })
    }
};
//# sourceMappingURL=resolvers.js.map