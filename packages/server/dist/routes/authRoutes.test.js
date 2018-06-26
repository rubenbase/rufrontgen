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
const node_fetch_1 = require("node-fetch");
test("Sends invalid back if a bad ID is sent", () => __awaiter(this, void 0, void 0, function* () {
    const response = yield node_fetch_1.default(`${process.env.TEST_HOST}/auth/confirm/12345`);
    const text = yield response.text();
    expect(text).toEqual("Invalid");
}));
//# sourceMappingURL=authRoutes.test.js.map