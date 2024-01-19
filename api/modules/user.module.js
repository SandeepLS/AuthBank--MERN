import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
    },
    bankName:{ type:String, required: true },
    bankAccountNo:{ type:String, required: true },
    address:{ type:String, required: true },
    city:{ type:String, required: true },
    country:{ type:String, required: true },
    zipcode:{ type:String, required: true },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;