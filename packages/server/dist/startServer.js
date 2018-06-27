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
const dotenv = require("dotenv");
const RateLimit = require("express-rate-limit");
const RateLimitRedisStore = require("rate-limit-redis");
require("reflect-metadata");
const session = require("express-session");
const connectRedis = require("connect-redis");
const createTypeormConn_1 = require("./utils/createTypeormConn");
const User_1 = require("./models/User");
const constants_1 = require("./constants");
const createTestConn_1 = require("./utils/testing/createTestConn");
const SESSION_SECRET = "sdbvsahvasv";
const RedisStore = connectRedis(session);
exports.startServer = () => __awaiter(this, void 0, void 0, function* () {
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
    const { server, redis } = require("./config/server");
    if (process.env.NODE_ENV === "test") {
        yield redis.flushall();
    }
    server.express.use(new RateLimit({
        store: new RateLimitRedisStore({
            client: redis
        }),
        windowMs: 15 * 60 * 1000,
        max: 1000,
        delayMs: 0
    }));
    server.express.use(session({
        store: new RedisStore({
            client: redis,
            prefix: constants_1.redisSessionPrefix
        }),
        name: "qid",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }));
    const cors = {
        credentials: true,
        origin: process.env.NODE_ENV === "test"
            ? "*"
            : process.env.FRONTEND_HOST
    };
    const authRoute = require("./routes/authRoutes")(User_1.User, redis);
    server.express.use("/auth", authRoute);
    if (process.env.NODE_ENV === "test") {
        yield createTestConn_1.createTestConn(true);
    }
    else {
        yield createTypeormConn_1.createTypeormConn();
    }
    const app = yield server.start({
        cors,
        port: process.env.NODE_ENV === "test" ? 0 : 4000
    });
    console.log("\nServer is running! Go to http://localhost:4000/docs");
    return app;
});
//# sourceMappingURL=startServer.js.map