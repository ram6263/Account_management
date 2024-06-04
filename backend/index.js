import express from 'express';
import cors from 'cors';
import { connectDB } from './DB/db.js';
import dotenv from 'dotenv';
import userRoutes from './route/userRoutes.js'
import bankaccount from './route/accountRoute.js'
import ExpenceRoute from './route/expenseRoute.js'
import EarningRoute from './route/earningRoute.js'
import transectionRoute from './route/transectionRoute.js'

const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();


connectDB();
app.use('/api/user',userRoutes);
app.use('/api/bankaccount',bankaccount);
app.use('/api/expense',ExpenceRoute);
app.use('/api/earning',EarningRoute);
app.use('/api/transection',transectionRoute);


app.listen(3000,console.log("Server is running on 3000"));

