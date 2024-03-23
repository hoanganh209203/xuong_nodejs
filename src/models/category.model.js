import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    title:{
        title:{
            type:String,
            required:true
        }
    }
})
export default mongoose.model('categories', CategorySchema)