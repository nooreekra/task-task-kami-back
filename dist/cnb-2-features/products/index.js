"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createProducts_1 = require("./controllers/createProducts");
const getProducts_1 = require("./controllers/getProducts");
const getProductById_1 = require("./controllers/getProductById");
const updateProduct_1 = require("./controllers/updateProduct");
const deleteProduct_1 = require("./controllers/deleteProduct");
const products = express_1.default.Router();
products.get("/get-all", getProducts_1.getProducts);
products.get("/get-one", getProductById_1.getProductById);
products.post("/create", createProducts_1.createProducts);
products.put("/update", updateProduct_1.updateProduct);
products.post("/delete", deleteProduct_1.deleteProduct);
exports.default = products;
//# sourceMappingURL=index.js.map