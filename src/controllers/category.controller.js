import categoryModel from "../models/category.model.js";
import { CategoryValidator } from "../validation/category.validation.js";


const CategoryController = {
    getListCategory : async (req, res) => {
        try {
            const  data  = await categoryModel.find();
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
            id = req.params.id
            const data = await categoryModel.findById(id)
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
    createCategory : async (req, res) => {

        try {
            const {error} = CategoryValidator.validate(req.body);
            if (error) {
                return res.status(500).json({
                    message:error.details[0].message
                })
            } 


            const  data  = await categoryModel.create(req.body);
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
    updateCategory : async (req, res) => {
        try {
            const {error} = CategoryValidator.validate(req.body,{
                abortEarly:false
            });
            if (error) {
                return res.status(500).json({
                    message:error.details[0].message
                })
            } 


            const  data  = await categoryModel.findByIdAndUpdate(req.params.id, req.body,{new: true});
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
    removeCategory : async (req, res) => {
        try {
            const data  = await categoryModel.findByIdAndDelete(req.params.id,{new: true});
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

export default CategoryController