import { asyncHandler } from "../utils/asynchandeler.js";
import { Transaction } from "../Modal/Transection.model.js";
import { ApiError } from "../utils/ApiError.js";
import { BankAccount } from "../Modal/BankAccount.model.js";

const addTransection = asyncHandler(async (req, res) => {
    const { date, amount, bankAccount, mode, description } = req.body;

    // if(!ammount||!bankAccount||!mode){
    //     throw new ApiError("Pleace fill all details",404);
    // }
    const bankAccountDoc = await BankAccount.findById(bankAccount);
    if (!bankAccountDoc) {
        throw new ApiError("Invalid Bank Account", 404);
    }
    if (mode === 'credit') {
        bankAccountDoc.currentBalance += amount;
    }
    else if (mode === 'debit') {
        if (bankAccountDoc.currentBalance < amount) {
            throw new ApiError("Insufficient Balance", 404);
        }
        bankAccountDoc.currentBalance -= amount;
    }


    const transection = await Transaction.create({ date, amount, bankAccount, mode, description });
    if (!transection) {
        throw new ApiError("Invalid Transaction", 404);
    }
    else {
        res.status(200).json({ transection });
    }

});
const getTransection = asyncHandler(async (req, res) => {
    const gettransection = await Transaction.find().populate("bankAccount");
    if (!gettransection) {
        throw new ApiError("Transection not found", 400);
    }
    else {
        res.status(200).json(gettransection);
    }
});
export {
    addTransection,
    getTransection
}