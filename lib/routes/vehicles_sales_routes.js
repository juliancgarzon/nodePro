"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicles_sales_routes = void 0;
const express_1 = require("express");
const vehicles_sales_1 = require("../controllers/vehicles_sales");
exports.vehicles_sales_routes = (0, express_1.Router)();
exports.vehicles_sales_routes.post('/createvehicles', vehicles_sales_1.createVehicleSale);
