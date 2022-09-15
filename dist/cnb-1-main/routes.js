"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const config_1 = require("./config");
const products_1 = __importDefault(require("../cnb-2-features/products"));
exports.routes = (app) => {
    app.use(config_1.VERSION_1_0 + "/products", products_1.default);
    // default
    app.use((req, res) => {
        console.log("bad url: ", req.method, req.url);
        res.status(404).json({
            error: "bad url",
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body,
        });
    });
};
//# sourceMappingURL=routes.js.map