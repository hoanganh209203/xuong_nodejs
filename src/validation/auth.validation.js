import Joi from "joi";

export const registerSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6),
    confirmpassword:Joi.string().required().min(6),
    username:Joi.string().min(6),
    phone:Joi.string(),
    avatar:Joi.string(),
    address:Joi.string(),
    role:Joi.string()
});
export const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6)
})