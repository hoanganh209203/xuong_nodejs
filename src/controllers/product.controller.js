import products from '../models/products.model.js';
import { productValid } from '../validation/product.validation.js';


const productController = {
    getListProduct : async (req, res) => {
        try {
            const  data  = await products.find();
            if (!data) {
                return res.status(400).json({
                    message: "Khong co san pham nao!"
                })
            }
            return res.status(200).json({
                message: "Lấy danh sách thành công !",
                data: data,
            })
           
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message,
            })
        }
    },
    getListById : async (req, res) =>{
        try {
            const id = req.params.id
            const data = await products.findById(id)
            if(!data){
                return res.status(404).json({
                    message:"Product not found"
                })
            }
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({
                message:"error sever"
            })
        }
    },
    createProduct : async (req, res) => {

        try {
            const {error} = productValid.validate(req.body);
            if (error) {
                return res.status(500).json({
                    message:error.details[0].message
                })
            } 


            const  data  = await products.create(req.body);
            if (!data) {
                return res.status(400).json({ message: "Them san pham that bai!" });
            }
            return res.status(201).json({
                message: "Them san pham thanh cong!",
                data,
            });
        } catch (error) {
            return res.status(500).json({ name: error.name, error: error.message });
        }
    },
    updateProduct : async (req, res) => {
        try {
            const  data  = await products.findByIdAndUpdate(req.params.id, req.body,{new: true});
            if (!data) {
                return res.status(400).json({
                    message: "Cap nhat that bai"
                })
            }
            return res.status(200).json({
                message: "Sua san pham thanh cong!",
                data: data,
        })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message,
            })
        }
    },
    removeProduct : async (req, res) => {
        try {
            const data  = await products.findByIdAndDelete(req.params.id,{new: true});
            if (!data) {
                return res.status(400).json({
                    message: "xoa nhat that bai"
                })
            }
            return res.status(200).json({
                message: "xoa san pham thanh cong!",
        })
        } catch (error) {
            return res.status(500).json({
                name: error.name,
                message: error.message,
            })
        }
     }
}

export default productController