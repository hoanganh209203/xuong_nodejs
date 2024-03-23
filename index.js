import express from 'express';
import cors from 'cors';
// import { connect } from 'mongoose';
// import dotevn from 'dotenv'
// import Router from './src/router/index.router.js';
const PORT = 8000;
import Router from './src/router/index.router.js';
import mongoose from 'mongoose';

// const app = express();
// dotevn.config();
// const PORT = process.env.PORT;
// const URI_DB = process.env.URI_DB
// app.use(express.json());
// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )
// connect(URI_DB);
// app.use(cors());
// app.use("/vip", Router)
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/BE_animevietsub')
  .then(() => console.log('Connected!'));
app.use(cors())

app.use(express.json());

app.use('/api',Router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
