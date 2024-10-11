import express, { Router }  from 'express';
import { errorHandler } from './middleware/error';
import { us_statesRoutes } from './routes/states_routes';
import { categoriesRoutes } from './routes/categories_Routes';
import cors from "cors";
import { userRoutes } from './routes/user_routes';
import { vehicles_sales_routes } from './routes/vehicles_sales_routes';
import { contact_routes } from './routes/contact_routes';
import { register_routes } from './routes/register_routes';

require('dotenv').config();

const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(categoriesRoutes);
app.use(userRoutes); 
app.use(us_statesRoutes);
app.use(vehicles_sales_routes);
app.use(contact_routes);
app.use(register_routes);


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});