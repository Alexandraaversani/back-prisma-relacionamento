import express from "express";
import { config } from "dotenv";
import cors from "cors";

import collectionRouter from "./routes/collectionRoutes.js";


config();
const port = process.env.PORT || 4001;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/colecoes", collectionRouter);

app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de animes funcionando!"});
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});