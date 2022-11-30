"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log("Data connected");
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/todos", todoRouter_1.default);
app.listen(3030, () => {
    console.log("App started 3030");
});
//# sourceMappingURL=index.js.map