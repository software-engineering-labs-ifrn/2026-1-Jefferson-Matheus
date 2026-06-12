import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.SERVER_PORT || 3000, () => {console.log(`Servidor escutando na porta ${process.env.SERVER_PORT}`)})