"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
const postgres_1 = __importDefault(require("postgres"));
exports.sql = (0, postgres_1.default)({
    host: "satao.db.elephantsql.com",
    port: 5432,
    user: "hvmobkwn",
    database: "hvmobkwn",
    password: "bxqP9aeg8uCXivVFMBuWlxj3p5XBZDzI"
});
