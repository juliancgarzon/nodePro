import { Router } from "express";
import { createVehicleSale  } from "../controllers/vehicles_sales"


export const vehicles_sales_routes= Router();
vehicles_sales_routes.post('/createvehicles',createVehicleSale) ;