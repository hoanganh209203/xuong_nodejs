import express from 'express';
import productController from '../controllers/product.controller.js';
import { checkAuth } from "../middlewares/checkAuth.middleware.js";
import { checkIsAdmin } from "../middlewares/checkIsAdmin.middleware.js";
import validBodyRequest from "../middlewares/validRequestBody.middleware.js";
import productValid from "../validation/product.validation.js";
const ProductRouter = express.Router();

ProductRouter.get('/',productController.getListProduct);
ProductRouter.get('/:id',productController.getListById);
ProductRouter.use(checkAuth, checkIsAdmin);
ProductRouter.delete('/:id',productController.removeProduct);
ProductRouter.put("/hide/:id", productController.softRemoveProductById);
ProductRouter.use(validBodyRequest(productValid));
ProductRouter.post('/',productController.createProduct);
ProductRouter.put('/:id',productController.updateProduct);

export default ProductRouter
