import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { loginSchema, registerSchema } from "../validation/auth.validation.js";
import validBodyRequest from "../middlewares/validRequestBody.middleware.js";
const authRouter = express.Router()

// authRouter.get('/',);
// authRouter.put('/:id',);
// authRouter.delete('/:id');
authRouter.post('/login',validBodyRequest(loginSchema),login);
authRouter.post('/register',validBodyRequest(registerSchema),register);

export default authRouter