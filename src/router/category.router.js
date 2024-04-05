import express from 'express';
import { checkAuth } from "../middlewares/checkAuth.middleware.js";
import { checkIsAdmin } from "../middlewares/checkIsAdmin.middleware.js";
import validBodyRequest from "../middlewares/validRequestBody.middleware.js";
import CategoryController from '../controllers/category.controller.js';
import categorySchema from "../validation/category.validation.js";
const CategoryRouter = express.Router();

CategoryRouter.get('/',CategoryController.getListCategory);
CategoryRouter.get('/:id',CategoryController.getListById);
CategoryRouter.use(checkAuth, checkIsAdmin);
CategoryRouter.put("/hide/:id",CategoryController.softRemoveCategoryById);
CategoryRouter.delete('/:id',CategoryController.removeCategory);
CategoryRouter.use(validBodyRequest(categorySchema));
CategoryRouter.post('/',CategoryController.createCategory);
CategoryRouter.put('/:id',CategoryController.updateCategory);
export default CategoryRouter
