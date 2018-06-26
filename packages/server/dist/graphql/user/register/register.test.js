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
const faker = require("faker");
const common_1 = require("@rufrontgen/common");
const User_1 = require("../../../models/User");
const errorMessages_1 = require("../../../utils/validation/errorMessages");
const TestClient_1 = require("../../../utils/testing/TestClient");
const createTestConn_1 = require("../../../utils/testing/createTestConn");
faker.seed(Date.now() + 5);
const email = faker.internet.email();
const password = faker.internet.password();
const name = faker.name.firstName();
const lastname = faker.name.lastName();
let conn;
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    conn = yield createTestConn_1.createTestConn();
}));
afterAll(() => __awaiter(this, void 0, void 0, function* () {
    conn.close();
}));
describe("Register user", () => __awaiter(this, void 0, void 0, function* () {
    it("Check for duplicate emails", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        const response = yield client.register(email, password, name, lastname);
        expect(response.data).toEqual({ register: null });
        const users = yield User_1.User.find({ where: { email } });
        expect(users).toHaveLength(1);
        const user = users[0];
        expect(user.email).toEqual(email);
        expect(user.password).not.toEqual(password);
        const response2 = yield client.register(email, password, name, lastname);
        expect(response2.data.register).toHaveLength(1);
        expect(response2.data.register[0]).toEqual({
            path: "email",
            message: errorMessages_1.duplicateEmail
        });
    }));
    it("Check bad email", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        const response3 = yield client.register("b", password, name, lastname);
        expect(response3.data).toEqual({
            register: [
                {
                    path: "email",
                    message: common_1.emailNotLongEnough
                },
                {
                    path: "email",
                    message: common_1.invalidEmail
                }
            ]
        });
    }));
    it("Check bad password", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        const response4 = yield client.register(faker.internet.email(), "aa", name, lastname);
        expect(response4.data).toEqual({
            register: [
                {
                    path: "password",
                    message: common_1.passwordNotLongEnough
                }
            ]
        });
    }));
    it("Check bad password and bad email", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        const response5 = yield client.register("df", "ad", name, lastname);
        expect(response5.data).toEqual({
            register: [
                {
                    path: "email",
                    message: common_1.emailNotLongEnough
                },
                {
                    path: "email",
                    message: common_1.invalidEmail
                },
                {
                    path: "password",
                    message: common_1.passwordNotLongEnough
                }
            ]
        });
    }));
}));
//# sourceMappingURL=register.test.js.map