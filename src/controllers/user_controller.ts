import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "../database/db_connect";


require("dotenv").config();

export const generateToken = async(req: Request, response: Response): Promise <Response> => {
    const username = req.body.username;
    const password = req.body.password;
    const query = await pool.query('SELECT * FROM users_login WHERE username = $1 AND password = $2', [username, password]);
    const user = query.rows[0];
    if (query.rowCount !== null  && query.rowCount > 0){
    const accessToken = jwt.sign(user, `${process.env.CLAVE_JWT}`, {expiresIn: "1h",});
    return response.status(200).json({ accessToken });
    } else {
    return response.status(400).json('User Not found');
    }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password } = req.body;

    if (first_name && second_name && first_last_name && second_last_name && city && email && phone_mobile && user_name && password) {
        try {
            await pool.query('INSERT INTO users_register (first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
                [first_name, second_name, first_last_name, second_last_name, city, email, phone_mobile, user_name, password]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    } else {
        return res.status(500).json('Internal Server Error');
    }
};


