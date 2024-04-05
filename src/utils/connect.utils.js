import mongoose from "mongoose";
import { URL_DB } from "./env.utils.js";
const connect = () => {
  mongoose
    .connect(URL_DB)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connect;