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
exports.getUserById = exports.createUser = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_connect_1 = __importDefault(require("../database/db_connect"));
require("dotenv").config();
const generateToken = (req, response) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const query = yield db_connect_1.default.query('SELECT * FROM users_login WHERE username = $1 AND password = $2', [username, password]);
    const user = query.rows[0];
    if (query.rowCount !== null && query.rowCount > 0) {
        const accessToken = jsonwebtoken_1.default.sign(user, `${process.env.CLAVE_JWT}`, { expiresIn: "1h", });
        return response.status(200).json({ accessToken });
    }
    else {
        return response.status(400).json('User Not found');
    }
});
exports.generateToken = generateToken;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password } = req.body;
    if (first_name && second_name && first_last_name && second_last_name && city && email && phone_mobile && user_name && password) {
        try {
            yield db_connect_1.default.query('INSERT INTO users_register (first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password]);
            return res.status(201).json({
                message: 'User created successfully',
                category: {
                    first_name,
                    second_name,
                    first_last_name,
                    second_last_name,
                    city,
                    email,
                    phone_mobile,
                    user_name,
                    password
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    }
    else {
        return res.status(500).json('Internal Server Error');
    }
});
exports.createUser = createUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield db_connect_1.default.query('SELECT * FROM users_register WHERE id = $1', [id]);
        return res.json(response.rows[0]);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getUserById = getUserById;
