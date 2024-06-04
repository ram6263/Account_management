import mongoose  from "mongoose";


const ExpenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  bankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true
  },
  paymentType: {
    type: String,
    required: true,
    enum: ['cash', 'card', 'online']
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

export const Expense = mongoose.model('Expense', ExpenseSchema);
