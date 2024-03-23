import express from 'express';
import CategoryController from '../controllers/category.controller.js';

const CategoryRouter = express.Router();

CategoryRouter.get('/',CategoryController.getListCategory);
CategoryRouter.get('/:id',CategoryController.getListById)
CategoryRouter.post('/',CategoryController.createCategory);
CategoryRouter.put('/:id',CategoryController.updateCategory);
CategoryRouter.delete('/:id',CategoryController.removeCategory);

export default CategoryRouter
