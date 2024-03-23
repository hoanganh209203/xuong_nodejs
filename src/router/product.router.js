import express from 'express';
import productController from '../controllers/product.controller.js';

const ProductRouter = express.Router();

ProductRouter.get('/',productController.getListProduct);
ProductRouter.get('/:id',productController.getListById)
ProductRouter.post('/',productController.createProduct);
ProductRouter.put('/:id',productController.updateProduct);
ProductRouter.delete('/:id',productController.removeProduct);

export default ProductRouter
