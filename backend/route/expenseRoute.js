import express from 'express';
import { addExpense, getExpence } from '../Controller/ExpenceController.js';

const router=express.Router();

router.route('/').post(addExpense);
router.route('/find').get(getExpence);


export default router;