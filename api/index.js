import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

mongoose.connect(process.env.MONGO).then(() =>{
            console.log("Connected to the MongoDB");
        }).catch((err) =>{
            console.log(err);
        });

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log('Server listening on port 3000');
}); 

app.use('/api/user', userRoutes); 
app.use('/api/auth', authRoutes); 

//middle wear
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode:statusCode,
    });
});