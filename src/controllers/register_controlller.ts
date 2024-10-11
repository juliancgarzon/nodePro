import pool from "../database/db_connect";
import { Request,Response } from "express";

export const createregister = async (req: Request, res: Response): Promise<Response> => {
    const { first_name, second_name,first_last_name,second_last_name, city, email ,phone_mobile,user_name , password } = req.body;

    if ( first_name && second_name && first_last_name && second_last_name && city && email && phone_mobile && user_name && password ) {
        try {
            await pool.query(
                'INSERT INTO users_register ( first_name, second_name, first_last_name, second_last_name, city, email,phone_mobile , user_name,password) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9)',
                [first_name, second_name, first_last_name, second_last_name, city, email,phone_mobile , user_name,password]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    } else {
        return res.status(400).json('All fields are required');
    }
};