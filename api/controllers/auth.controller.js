import User from "../modules/user.module.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
    // console.log(req.body);
    const { username, bankName, bankAccountNo, address, city, country, zipcode, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, bankName, bankAccountNo, address, city, country, zipcode, email, password: hashedPassword });
    try{
        await newUser.save();
        res.status(201).json({message: "user created successfully"});  
    } catch (error){
        // res.status(500).json(error.message);
        next(error);
        // next(errorHandler(300, "somrthing went wrong"));
    }
 
};
