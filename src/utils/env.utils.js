import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const { PORT, URL_DB, JWT_SECRET } = process.env;

export { PORT, URL_DB, JWT_SECRET };