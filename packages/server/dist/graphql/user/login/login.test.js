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
const errorMessages_1 = require("../../../utils/validation/errorMessages");
const User_1 = require("../../../models/User");
const TestClient_1 = require("../../../utils/testing/TestClient");
const faker = require("faker");
faker.seed(Date.now() + 1);
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
const loginExpectError = (client, e, p, errMsg) => __awaiter(this, void 0, void 0, function* () {
    const response = yield client.login(e, p);
    expect(response.data).toEqual({
        login: [
            {
                path: "email",
                message: errMsg
            }
        ]
    });
});
describe("login", () => {
    test("email not found send back error", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        yield loginExpectError(client, faker.internet.email(), faker.internet.password(), errorMessages_1.invalidLogin);
    }));
    test("email not confirmed", () => __awaiter(this, void 0, void 0, function* () {
        const client = new TestClient_1.TestClient(process.env.TEST_HOST);
        yield client.register(email, password, name, lastname);
        yield loginExpectError(client, email, password, errorMessages_1.confirmEmailError);
        yield User_1.User.update({ email }, { confirmed: true });
        yield loginExpectError(client, email, faker.internet.password(), errorMessages_1.invalidLogin);
        const response = yield client.login(email, password);
        expect(response.data).toEqual({ login: null });
    }));
});
//# sourceMappingURL=login.test.js.map