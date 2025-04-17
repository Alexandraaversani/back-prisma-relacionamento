
import express from "express";
import collectionController from "../controllers/collectionController.js";
const router = express.Router();
router.get("/", collectionController.getAll);
router.post("/", collectionController.create);
router.put("/:id", tarefaController.update);
router.delete("/:id", tarefaController.delete);
export default router;
