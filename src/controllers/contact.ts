import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request,Response } from "express";


export const createContact = async (req: Request, res: Response): Promise<Response> => {
    const { first_name, last_name, city, phone, email, description } = req.body;

    if ( first_name && last_name && city && phone && email && description) {
        try {
            await pool.query(
                'INSERT INTO contact_form ( first_name, last_name, city, phone, email, description) VALUES ($1, $2, $3, $4, $5, $6)',
                [first_name, last_name, city, phone, email, description]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    } else {
        return res.status(400).json('All fields are required');
    }
};