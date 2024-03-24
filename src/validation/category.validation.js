import Joi from "joi";

export const CategoryValidator = Joi.object({
    title:Joi.string().required().min(5)
})