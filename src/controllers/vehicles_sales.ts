import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "../database/db_connect";


export const createVehicleSale = async (req: Request, res: Response): Promise<Response> => {
    const { 
        nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento,
        marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion 
    } = req.body;

    if (nombre_comprador && apellido_comprador && telefono && correo_electronico && direccion && tipo_identificacion && numero_documento &&
        marca && modelo && ano && precio && kilometraje && tipo_combustible && numero_puertas && color && descripcion) {
        try {
            await pool.query(
                'INSERT INTO compras_vehiculos (nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento, marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
                [nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento,
                    marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion]
            );
            return res.status(201).json({
                message: 'Vehicle sale record added successfully',
                saleInfo: { 
                    nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento,
                    marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        return res.status(400).json({ message: 'All fields are required' });
    }
};