import { Router } from "express";
import { createUser, generateToken ,getUserById} from "../controllers/user_controller";

export const userRoutes= Router();
userRoutes.post('/api/login',generateToken);
userRoutes.post('/user/register',createUser);
userRoutes.get('/register/:id',getUserById);