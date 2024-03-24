import {registerSchem} from '../validation/auth.validation.js'
export const validAuth = (user,isSchema) =>{
    const {error} = isSchema.validate(user,{
        abortEarly:false
    })
    if(error){
        const errors = error.details.map((e)=>e.message)
        return res.status(500).json({message: errors.message})
    }
    next();
}