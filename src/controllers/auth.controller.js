import userModel from "../models/user.model.js";
import { registerSchem } from "../validation/auth.validation.js";
import bcrypt from 'bcrypt'
export const register = async (req,res) =>{
    try {
        const {email,password} = req.body
        const {value, error} = await registerSchem.validate(req.body,{
            abortEarly:false
        })
        if(error){
            const errors = error.details.map((e)=>e.message)
            return res.status(500).json({message: errors.message})
        }

        const checkEmail = await userModel.findOne({email:email})
        if(checkEmail){
            return res.status(400).json({message:"Email da ton tai"})
        }
        const salt = await bcrypt.genSalt(10)
        const handlPassword = await bcrypt.hash(password,salt)
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