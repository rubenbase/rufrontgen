"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
exports.redis = process.env.NODE_ENV === "production"
    ? new Redis(process.env.REDIS_URL)
    : new Redis();
//# sourceMappingURL=redis.js.map