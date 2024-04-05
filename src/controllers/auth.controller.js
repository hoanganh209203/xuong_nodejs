import userModel from "../models/user.model.js";
import { validAuth } from "../utils/valid.utils.js";
import { loginSchema, registerSchema } from "../validation/auth.validation.js";
import { errorMessages, successMessages } from "../constants/message.constant.js";
import { comparePassword,hashPassword } from "../utils/hashPass.js";
import { generateToken } from "../utils/jwt.utils.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const { JWT_SECRET } = process.env;
export const register = async (req,res,next) =>{
    try {
        const {email,password} = req.body
        console.log(req.body);
        const checkEmail = await userModel.findOne({email})
        console.log(checkEmail);
        if(checkEmail){
            return res.status(400).json({ message: errorMessages.EMAIL_EXIST })
        }
        const hashPass = await hashPassword(password);

        const user = await userModel.create({...req.body, password:hashPass})
        console.log(user);
        return res.status(201).json({ 
           message: successMessages.REGISTER_SUCCESS,
            user,
        })
    } catch (error) {
        next(error);
    }
}
export const login = async (req, res,next) => {
    try {
        
        const userExit = await userModel.findOne({email})
        if(!userExit){
            return res.status(400).json({ message: errorMessages.EMAIL_NOT_FOUND })
        }
        if (!(await comparePassword(password, userExit.password))) {
            return res.status(400).json({ message: errorMessages.INVALID_PASSWORD });
          }

        // const token = jwt.sign({id:userExit.id},"hoangem123",{expiresIn:"1h"})
        const token = generateToken({ _id: userExit._id }, "10d");
        
        console.log(token);
        userExit.password = undefined
        userExit.confirmpassword = undefined
        return res.status(201).json({
            message: successMessages.LOGIN_SUCCESS,
            userExit,
            token
        })
    } catch (error) {
        next(error);
    }
}