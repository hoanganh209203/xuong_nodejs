import Joi from "joi";

export const registerSchem = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6),
    confirmpassword:Joi.string().required().min(6),
    username:Joi.string().min(6),
    phone:Joi.string(),
    avatar:Joi.string(),
    address:Joi.string(),
    role:Joi.string()
})