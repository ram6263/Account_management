import mongoose  from "mongoose";
const BankAccountSchema = new mongoose.Schema({
  
    bankName: {
      type: String,
      required: true
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true
    },
    accountType: {
      type: String,
      required: true,
      enum: ['savings', 'checking', 'business']
    },
    currentBalance: {
      type: Number,
      required: true,
      default: 0
    }
  });
  
  export const BankAccount = mongoose.model('BankAccount', BankAccountSchema);