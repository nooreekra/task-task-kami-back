"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = void 0;
const product_1 = __importDefault(require("../models/product"));
exports.getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, } = req.query;
    try {
        const product = yield product_1.default.findById({ _id: id })
            .exec();
        if (product) {
            res.status(200)
                .json(product);
        }
        else {
            res.status(500).json({
                info: 'Product not found!',
                in: 'getProductById/Lessons.findById',
            });
        }
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: Object.assign({}, e),
            in: 'getProductById/Lessons.findById',
        });
    }
});
//# sourceMappingURL=getProductById.js.map