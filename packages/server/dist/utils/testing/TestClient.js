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
const rp = require("request-promise");
class TestClient {
    constructor(url) {
        this.url = url;
        this.options = {
            withCredentials: true,
            jar: rp.jar(),
            json: true
        };
    }
    forgotPasswordChange(newPassword, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return rp.post(this.url, Object.assign({}, this.options, { body: {
                    query: `
        mutation {
            forgotPasswordChange(newPassword: "${newPassword}", key: "${key}") {
            path
            message
          }
        }
        `
                } }));
        });
    }
    register(email, password, name, lastname) {
        return __awaiter(this, void 0, void 0, function* () {
            return rp.post(this.url, Object.assign({}, this.options, { body: {
                    query: `
        mutation {
          register(email: "${email}", password: "${password}", name: "${name}", lastname: "${lastname}") {
            path
            message
          }
        }
        `
                } }));
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return rp.post(this.url, Object.assign({}, this.options, { body: {
                    query: `
        mutation {
          logout
        }
        `
                } }));
        });
    }
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            return rp.post(this.url, Object.assign({}, this.options, { body: {
                    query: `
        {
          me {
            id
            email
            name
            lastname
          }
        }
        `
                } }));
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return rp.post(this.url, Object.assign({}, this.options, { body: {
                    query: `
        mutation {
          login(email: "${email}", password: "${password}") {
            path
            message
          }
        }
        `
                } }));
        });
    }
}
exports.TestClient = TestClient;
//# sourceMappingURL=TestClient.js.map