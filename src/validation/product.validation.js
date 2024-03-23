import Joi from "joi"

export const productValid = Joi.object({
    title:Joi.string().required().min(3),
    status:Joi.string().required(),
    categoryId:Joi.string().required(),
    rating:Joi.number().required().min(1).max(5),
    released:Joi.number().required(),
    time:Joi.number().required(),
    description:Joi.string().required().min(10),
    thumbnail:Joi.string().required(),
    goodAnime:Joi.boolean()
    // images:Joi.string().required()
})