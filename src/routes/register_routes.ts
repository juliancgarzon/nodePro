import { Router } from "express";
import { createregister } from "../controllers/register_controlller";

export const register_routes= Router();
register_routes.post('/createregister',createregister) ;