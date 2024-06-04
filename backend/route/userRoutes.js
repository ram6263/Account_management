import mongoose from "mongoose";
import express from 'express';
import { authuser, registeruser } from "../Controller/userController.js";
const router=express.Router();

router.route('/').post(registeruser);
router.post('/login',authuser);


export default router;