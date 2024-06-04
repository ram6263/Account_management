import { asyncHandler } from "../utils/asynchandeler.js";
import { Expense } from "../Modal/Expense.model.js";
import { ApiError } from "../utils/ApiError.js";
import { BankAccount } from "../Modal/BankAccount.model.js";

const addExpense=asyncHandler(async(req,res)=>{
    const {date,bankAccount,paymentType,category,description,amount}=req.body;

    const bankAccountDoc = await BankAccount.findById(bankAccount);
    if (!bankAccountDoc) {
        throw new ApiError("Invalid Bank Account", 404);
    }
    else{
        if(bankAccountDoc.currentBalance<amount){
            throw new ApiError("Insufficient Balance", 404);
        }
        bankAccountDoc.currentBalance -= amount;
    }

    const updateexpence=await Expense.create({date,bankAccount,paymentType,category,description,amount});
    res.status(200).json(updateexpence);   
});
const getExpence=asyncHandler(async(req,res)=>{
    
    const expence=await Expense.find().populate('bankAccount');
    if(!expence){
        throw new ApiError("No expence found",404);
    }
    else{
        res.status(200).json(expence);
    }
})
export {
    addExpense,
    getExpence
}