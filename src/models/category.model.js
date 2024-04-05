import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
      },
      isHidden: {
        type: Boolean,
        default: false,
      }
},{
    timestamps: true,
    versionKey: false,
  })
export default mongoose.model('categories', CategorySchema)