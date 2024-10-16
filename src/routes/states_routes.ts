import { Router } from "express";
import { authenticateToken } from "../middleware/authorization";
import { createState, deleteStates, getus_states, getus_statesById, updateStates } from "../controllers/states_controller";

export const us_statesRoutes =Router();

us_statesRoutes.get('/us_states',getus_states)
us_statesRoutes.get('/us_states/:id',getus_statesById);
us_statesRoutes.post('/createState',createState );
us_statesRoutes.delete('/deleteState/:id',deleteStates);
us_statesRoutes.put('/updateStates/:id',updateStates);
