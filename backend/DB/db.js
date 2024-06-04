import mongoose from "mongoose";
import {DB_NAME} from '../constant.js';

const connectDB=async()=>{
    try {
        
        const connection= await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("Mongo db connection failed ",error.message);
        process.exit(1);
    }
}
export  {connectDB};