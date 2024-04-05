import mongoose from 'mongoose';

const productShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLeght: 3,
        },
        price: {
            type: Number,
            minLeght: 1,
        },
        description: {
            type: String,
            required: true,
            minLeght: 10
        },
        thumbnail: {
            type: String,
            required: true,

        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
            required: true,
        }

    }, {
    timestamps: true,
    veronKey: false,
})


export default mongoose.model("products", productShema);