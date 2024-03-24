import userModel from "../models/user.model.js";
import { handlPassword } from "../utils/hashPass.js";
import { validAuth } from "../utils/valid.utils.js";
import { loginSchem, registerSchem } from "../validation/auth.validation.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const register = async (req,res) =>{
    try {
        const {email,password} = req.body
       validAuth(req.body,registerSchem)
        const checkEmail = await userModel.findOne({email:email})
        if(checkEmail){
            return res.status(400).json({message:"Email da ton tai"})
        }
       handlPassword(password)
        const user = await userModel.create({...req.body, password:handlPassword})
        console.log(user);
        return res.status(201).json({ 
            message: 'Dang ky thanh cong',
            user,
        })
    } catch (error) {
        return res.status(500).json({
            name:error.name,
            message:error.message});
    }
}
export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const {error} = loginSchem.validate(req.body,{
            abortEarly:false
        })
        if(error){
            const errors = error.details.map((item)=>item.message);
            return res.status(500).json({message:errors})
        }
        const userExit = await userModel.findOne({email})
        if(!userExit){
            return res.status(400).json({message:"Email khong ton tai"})
        }
        const checkPassword = await bcrypt.compare(password,userExit.password)
        const token = jwt.sign({id:userExit.id},"hoangem123",{expiresIn:"1h"})
        console.log(token);
        userExit.password = undefined
        userExit.confirmpassword = undefined
        return res.status(201).json({
            message:"Dang nhap thanh cong",
            userExit,
            token
        })
    } catch (error) {
        return res.status(500).json({
            name:error.name,
            message:error.message});
    }
}