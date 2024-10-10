import { Router } from "express";
import { createContact } from "../controllers/contact"



export const contact_routes= Router();
contact_routes.post('/createcontact',createContact) ;