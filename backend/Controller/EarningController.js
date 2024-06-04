import { asyncHandler } from "../utils/asynchandeler.js";
import { ApiError } from "../utils/ApiError.js";
import { Earning } from "../Modal/Earning.model.js";
import { BankAccount } from "../Modal/BankAccount.model.js";


const addEarning=asyncHandler(async(req,res)=>{
   const {date,bankAccount,paymentType,source,description,amount}=req.body;
   const bankAccountDoc = await BankAccount.findById(bankAccount);
   if (!bankAccountDoc) {
       throw new ApiError("Invalid Bank Account", 404);
   }
   else{
    if (bankAccountDoc.currentBalance < amount) {
        throw new ApiError("Insufficient Balance", 404);
    }
    bankAccountDoc.currentBalance -= amount;
   }
   

   const addearning=await Earning.create({date,bankAccount,paymentType,source,description,amount});

   if(!addearning){
    throw new ApiError("No add earning",400);
   }
   else{
    res.status(200).json(addearning); 
   }
});

const getEarning=asyncHandler(async(req,res)=>{
    const earning=await Earning.find({}).sort({date:-1}).populate("bankAccount")
    if(!earning){
        throw new ApiError("No earning found",400)
    }
    else{
        res.status(200).json(earning); 
    }
});
export {
    addEarning,
    getEarning
}