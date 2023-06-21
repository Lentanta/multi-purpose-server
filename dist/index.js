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
const dotenv_1 = __importDefault(require("dotenv"));
const postgres_1 = require("./postgres");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.HOST_PORT;
app.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteData = yield (0, postgres_1.sql) `SELECT * FROM note`;
    res.send(noteData);
}));
app.listen(port, () => {
    console.log("SERVER IS RUNNING AT http://localhost:2727");
});
