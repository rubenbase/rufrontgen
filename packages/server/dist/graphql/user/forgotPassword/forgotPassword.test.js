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
const createTestConn_1 = require("../../../utils/testing/createTestConn");
const User_1 = require("../../../models/User");
const TestClient_1 = require("../../../utils/testing/TestClient");
const createForgotPasswordLink_1 = require("../../../utils/createForgotPasswordLink");
const Redis = require("ioredis");
const forgotPasswordLockAccount_1 = require("../../../utils/forgotPasswordLockAccount");
const common_1 = require("@rufrontgen/common");
const errorMessages_1 = require("../../../utils/validation/errorMessages");
const faker = require("faker");
let conn;
const redis = new Redis();
faker.seed(Date.now() + 0);
const email = faker.internet.email();
const password = faker.internet.password();
const newPassword = faker.internet.password();
const name = faker.name.findName();
const lastname = faker.name.lastName();
let userId;
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    conn = yield createTestConn_1.createTestConn();
    const user = yield User_1.User.create({
        email,
        password,
        name,
        lastname,
        confirmed: true
    }).save();
    userId = user.id;
}));
afterAll(() => __awaiter(this, void 0, void 0, function* () {
    conn.close();
}));
describe("forgot password", () => {
    test("make sure forgot password works", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        yield forgotPasswordLockAccount_1.forgotPasswordLockAccount(userId, redis);
        const url = yield createForgotPasswordLink_1.createForgotPasswordLink("", userId, redis);
        const parts = url.split("/");
        const key = parts[parts.length - 1];
        expect(yield client.login(email, password)).toEqual({
            data: {
                login: [
                    {
                        path: "email",
                        message: errorMessages_1.forgotPasswordLockedError
                    }
                ]
            }
        });
        expect(yield client.forgotPasswordChange("as", key)).toEqual({
            data: {
                forgotPasswordChange: [
                    {
                        path: "newPassword",
                        message: common_1.passwordNotLongEnough
                    }
                ]
            }
        });
        const response = yield client.forgotPasswordChange(newPassword, key);
        expect(response.data).toEqual({
            forgotPasswordChange: null
        });
        expect(yield client.forgotPasswordChange(faker.internet.password(), key)).toEqual({
            data: {
                forgotPasswordChange: [
                    {
                        path: "key",
                        message: errorMessages_1.expiredKeyError
                    }
                ]
            }
        });
        expect(yield client.login(email, newPassword)).toEqual({
            data: {
                login: null
            }
        });
    }));
});
//# sourceMappingURL=forgotPassword.test.js.map