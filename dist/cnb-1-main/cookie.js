"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookie = void 0;
const cors_1 = __importDefault(require("cors"));
exports.cookie = (app) => {
    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
            console.log("origin: ", origin);
            callback(null, true); // everyone is allowed
        }
    };
    app.use(cors_1.default(corsOptions));
};
//# sourceMappingURL=cookie.js.map