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
exports.createContact = void 0;
const db_connect_1 = __importDefault(require("../database/db_connect"));
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, city, phone, email, description } = req.body;
    if (first_name && last_name && city && phone && email && description) {
        try {
            yield db_connect_1.default.query('INSERT INTO contact_form ( first_name, last_name, city, phone, email, description) VALUES ($1, $2, $3, $4, $5, $6)', [first_name, last_name, city, phone, email, description]);
            return res.status(201).json({
                message: 'Contact created successfully',
                contact: {
                    first_name,
                    last_name,
                    city,
                    phone,
                    email,
                    description
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
exports.createContact = createContact;
