"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const appRouter_1 = __importDefault(require("./routes/appRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(appRouter_1.default);
app.use((0, morgan_1.default)("dev"));
exports.default = app;
