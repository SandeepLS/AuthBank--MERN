import User from "../modules/user.module.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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
        // next(errorHandler(300, "something went wrong"));
    }
};

export const signin = async (req, res, next) =>{
    const { email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'user NotFound'));
        const validpassword = bcryptjs.compareSync(password, validUser.password);
        if(!validpassword) return next(errorHandler(401, 'wrong credential'));
        const token = jwt.sign ({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); //1hour
        res
            .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
            .status(200)
            .json(rest);
        
    } catch (error){
        next(error);
    }
}
