import mongoose, { Schema } from 'mongoose';
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    account:[
        {
            type:Schema.Types.ObjectId,
            ref:'BankAccount'
    }
],
transaction:[
    {
        type:Schema.Types.ObjectId,
        ref:'Transaction'

}],

});

//just code execute ke phele
userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();  //if no change in the password then just go to the next middleware i.e.,
    this.password=await bcrypt.hash(this.password,10)
    next()
    
});
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

export const User=mongoose.model("User",userSchema);