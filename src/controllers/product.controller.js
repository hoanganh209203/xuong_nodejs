import products from '../models/products.model.js';
import { productValid } from '../validation/product.validation.js';


const productController = {
    getListProduct: async (req, res, next) => {
        try {
            const data = await products.find();
            return res.status(200).json({
                message: "Lấy danh sách thành công !",
                data: data,
            })

        } catch (error) {
            next(error)
        }
    },
    getListById: async (req, res, next) => {
        try {
            const id = req.params.id
            const data = await products.findById(id)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },
    createProduct: async (req, res, next) => {

        try {
            const { error } = productValid.validate(req.body);
            if (error) {
                return res.status(500).json({
                    message: error.details[0].message
                })
            }
            const data = await products.create(req.body);
            return res.status(201).json({
                message: "Them san pham thanh cong!",
                data,
            });
        } catch (error) {
            next(error)
        }
    },
    updateProduct: async (req, res, next) => {
        try {
            const data = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json({
                message: "Sua san pham thanh cong!",
                data: data,
            })
        } catch (error) {
            next(error)
        }
    },
    removeProduct: async (req, res, next) => {
        try {
            const data = await products.findByIdAndDelete(req.params.id, { new: true });
            return res.status(200).json({
                message: "xoa san pham thanh cong!",
            })
        } catch (error) {
            next(error)
        }
    }
}

export default productController