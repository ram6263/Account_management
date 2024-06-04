import { asyncHandler } from "../utils/asynchandeler.js";
import { BankAccount } from "../Modal/BankAccount.model.js";
import { ApiError } from "../utils/ApiError.js";

const addBankAccount=asyncHandler(async(req,res)=>{
    const {bankName,accountNumber,accountType,currentBalance}=req.body;


    if(!bankName||!accountNumber||!accountType||!currentBalance){
        throw new ApiError(400,"Please feild all details");
    }
    const exist=await BankAccount.findOne({accountNumber});
    if(exist){
        throw new ApiError(400,"Account Number already exist");
    }
    const bankAccount=await BankAccount.create({bankName,accountNumber,accountType,currentBalance
        });
        if(bankAccount){
            return res.status(201).json({
                _id:bankAccount._id,
                bankName:bankAccount.bankName,
                accountNumber:bankAccount.accountNumber,
                accountType:bankAccount.accountType,
                currentBalance:bankAccount.currentBalance,
                
            });
            console.log("Successful open account.....");
        }
        else{
            throw new ApiError(400,"Something went wrong");
        }
        

});

const getBankAccount=asyncHandler(async(req,res)=>{
    
    const bankAccount=await BankAccount.find();
    if(bankAccount){
        return res.status(200).json(bankAccount);
    }
    else{
        throw new ApiError(400,"bankAccount not found");
    }
});
const updateBalance=asyncHandler(async(req,res)=>{
    const {bankId,currentBalance}=req.body;
    const update=await BankAccount.findByIdAndUpdate(
        bankId,
        {
            currentBalance:currentBalance,
        },{
            new:true
        }
    )
    if(!update){
        throw new ApiError(400,"Bank account not found");
    }
    else{
        return res.status(200).json(update);
    }
            

});
const deleteBankAccount=asyncHandler(async(req,res)=>{
    const {bankId}=req.body;
    const bankAccount=await BankAccount.findByIdAndDelete(bankId);
    if(!bankAccount){
        throw new ApiError(400,"bankAccount not found");
    }
    else{
        return res.status(200).json(bankAccount);
    }
})
export {
    addBankAccount,
    updateBalance,
    getBankAccount,
    deleteBankAccount
}