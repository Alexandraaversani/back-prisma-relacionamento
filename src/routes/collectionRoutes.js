
import express from "express";
import CollectionController from "../controllers/collectionController.js";
const collectionRouter = express.Router();

collectionRouter.get("/", CollectionController.getAllCollection);

collectionRouter.post("/", CollectionController.createCollection);


export default collectionRouter;
