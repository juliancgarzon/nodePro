"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register_routes = void 0;
const express_1 = require("express");
const register_controlller_1 = require("../controllers/register_controlller");
exports.register_routes = (0, express_1.Router)();
exports.register_routes.post('/createregister', register_controlller_1.createregister);
