import User from "../modules/user.module.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    // console.log(req.body);
    const { username, bankName, bankAccountNo, address, city, country, zipcode, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, bankName, bankAccountNo, address, city, country, zipcode, email, password: hashedPassword });
    try{
        await newUser.save();
        res.status(201).json({message: "user created successfully"});  
    } catch (error){
        res.status(500).json(error.message);
    }
 
};
