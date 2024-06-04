import express from 'express';
import { addTransection, getTransection } from '../Controller/transectioncontroller.js';

const router=express.Router();
router.route('/').post(addTransection);
router.route('/find').get(getTransection);

export default router;