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
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(200).json({ message: "yes" })
    const todo = new todoModel_1.default(req.body);
    try {
        yield todo.save();
        return res.status(200).json({
            message: "Successfully Created",
            todo
        });
    }
    catch (error) {
        return res.status(400).json({
            Error: `You run into a Create ${error}`
        });
    }
});
exports.createTodo = createTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.find({});
    try {
        return res.status(200).json({
            message: "This is all todo details",
            todo
        });
    }
    catch (error) {
        return res.status(404).json({
            Error: `You run into a Get ${error}`
        });
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoModel_1.default.findByIdAndUpdate(req.params.id, req.body);
        // await todo.save()
        return res.status(201).json({
            message: "Successfully Updated",
        });
    }
    catch (error) {
        return res.status(404).json({
            Error: `You run into a Update ${error}`
        });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield todoModel_1.default.findByIdAndDelete(req.params.id);
        // await Todo.save()
        return res.status(201).json({
            message: "Successfully deleted",
        });
    }
    catch (error) {
        return res.status(404).json({
            Error: `You run into a Delete ${error}`
        });
    }
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todoController.js.map