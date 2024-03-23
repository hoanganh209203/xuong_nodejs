import mongoose from 'mongoose';

const productShema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLeght: 3,
        },
        status: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            minLeght: 1,
        },
        released: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            require: true
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
        },
        goodAnime:{
            type:Boolean
        }
        // images: {
        //     path: {
        //         type: String,
        //     }
        // },

    }, {
    timestamps: true,
    veronKey: false,
})


export default mongoose.model("products", productShema);