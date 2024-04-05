import express from 'express';
import cors from 'cors';
// import { connect } from 'mongoose';
// import dotevn from 'dotenv'
// import Router from './src/router/index.router.js';

import Router from './src/router/index.router.js';
// import mongoose from 'mongoose';
import { errorHandler, errorHandlerNotFound } from './src/utils/error.handler.js';


import { PORT } from "./src/utils/env.utils.js";
import connect from "./src/utils/connect.utils.js";
connect();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api',Router)
// mongoose.connect('mongodb://127.0.0.1:27017/mydb')
//   .then(() => console.log('Connected!'));
  //Error Handling 404

app.use(errorHandlerNotFound,errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
