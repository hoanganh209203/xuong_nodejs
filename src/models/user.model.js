import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member",
    },
    avata: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        unique: true,
    }
}, {
    timeseries: true,
    versionKey: false,
})
export default mongoose.model("User", userSchema)