import Joi from "joi"

export const productValid = Joi.object({
    name:Joi.string().required().min(3),
    categoryId:Joi.string().required(),
    price:Joi.number().required(),
    description:Joi.string().required().min(10),
    thumbnail:Joi.string().required(),
    // images:Joi.string().required()
})