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
exports.createVehicleSale = void 0;
const db_connect_1 = __importDefault(require("../database/db_connect"));
const createVehicleSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento, marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion } = req.body;
    if (nombre_comprador && apellido_comprador && telefono && correo_electronico && direccion && tipo_identificacion && numero_documento &&
        marca && modelo && ano && precio && kilometraje && tipo_combustible && numero_puertas && color && descripcion) {
        try {
            yield db_connect_1.default.query('INSERT INTO compras_vehiculos (nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento, marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)', [nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento,
                marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion]);
            return res.status(201).json({
                message: 'Vehicle sale record added successfully',
                saleInfo: {
                    nombre_comprador, apellido_comprador, telefono, correo_electronico, direccion, tipo_identificacion, numero_documento,
                    marca, modelo, ano, precio, kilometraje, tipo_combustible, numero_puertas, color, descripcion
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    else {
        return res.status(400).json({ message: 'All fields are required' });
    }
});
exports.createVehicleSale = createVehicleSale;
