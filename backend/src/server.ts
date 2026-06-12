import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: '../.env' });

const app = express();

app.listen(process.env.SERVER_PORT || 3000, () => {console.log(`Servidor escutando na porta ${process.env.SERVER_PORT}`)})