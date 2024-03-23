import express from 'express';
import ProductRouter from './product.router.js';
import CategoryRouter from './category.router.js';
import authRouter from './auth.router.js';
const Router = express.Router();

Router.use('/products',ProductRouter);
Router.use('/category',CategoryRouter);
Router.use('/auth',authRouter)
export default Router