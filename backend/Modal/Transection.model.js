import mongoose from "mongoose";


const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  bankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true
  },
  mode: {
    type: String,
    required: true,
    enum: ['credit', 'debit']
  },
  description: {
    type: String
  }
});

export const Transaction = mongoose.model('Transaction', TransactionSchema);
