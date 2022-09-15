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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./cnb-1-main/config");
const app_1 = require("./cnb-1-main/app");
const routes_1 = require("./cnb-1-main/routes");
const app = express_1.default();
app_1.appUse(app);
routes_1.routes(app);
mongoose_1.default.connect(config_1.MongoDBUris, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
    console.log("MongoDB connected successfully");
    const port = process.env.PORT || config_1.PORT;
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Products-back 1.0 listening on port: " + port);
    }));
})
    .catch(e => console.log("MongoDB connection error: ", Object.assign({}, e)));
process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
//# sourceMappingURL=index.js.map