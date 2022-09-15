"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.VERSION_1_0 = exports.MongoDBUris = void 0;
const USER_NAME = process.env.MONGO_DB_USER_NAME || "test";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "7777";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "testclucter.wc2wnxq.mongodb.net/"; // bd for tests
exports.MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
exports.VERSION_1_0 = "/1.0";
exports.PORT = 7542;
//# sourceMappingURL=config.js.map