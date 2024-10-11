"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact_routes = void 0;
const express_1 = require("express");
const contact_1 = require("../controllers/contact");
exports.contact_routes = (0, express_1.Router)();
exports.contact_routes.post('/createcontact', contact_1.createContact);
