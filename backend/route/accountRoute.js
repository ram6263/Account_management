import express from 'express';
import { addBankAccount, deleteBankAccount, getBankAccount, updateBalance } from '../Controller/BankAccountController.js';

const router=express.Router();

router.route('/add').post(addBankAccount);
router.route('/updateBalance').put(updateBalance);
router.route('/getBankAccount').get(getBankAccount);
router.route('/delete').delete(deleteBankAccount);
export default router;