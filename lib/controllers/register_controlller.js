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
exports.createregister = void 0;
const db_connect_1 = __importDefault(require("../database/db_connect"));
const createregister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password } = req.body;
    if (first_name && second_name && first_last_name && second_last_name && city && email && phone_mobile && user_name && password) {
        try {
            yield db_connect_1.default.query('INSERT INTO users_register ( first_name, second_name, first_last_name, second_last_name, city, email,phone_mobile , user_name,password) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9)', [first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password]);
            return res.status(201).json({
                message: 'Contact created successfully',
                contact: {
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
        return res.status(400).json('All fields are required');
    }
});
exports.createregister = createregister;
