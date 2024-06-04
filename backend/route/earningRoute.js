import express from 'express';
import { addEarning, getEarning } from '../Controller/EarningController.js';

const router = express.Router();

router.route('/').post(addEarning)
router.route('/find').get(getEarning)
export default router