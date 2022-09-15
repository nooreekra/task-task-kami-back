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
exports.createProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
exports.createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, images, isActive, isSinglePrice, price, priceByCity, } = req.body;
    if (!title || !description || !images.length) {
        res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice',
            body: req.body,
            in: 'createProducts',
        });
        return;
    }
    if (isSinglePrice && !price) {
        res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice, price',
            body: req.body,
            in: 'createProducts',
        });
        return;
    }
    if (!isSinglePrice && !priceByCity.length) {
        res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice, priceByCity',
            body: req.body,
            in: 'createProducts',
        });
        return;
    }
    try {
        const product = yield product_1.default.create({
            title,
            description,
            images,
            isActive,
            isSinglePrice,
            price,
            priceByCity,
        });
        res.status(201).json({ product });
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'createProducts/Products.create',
        });
    }
});
//# sourceMappingURL=createProducts.js.map