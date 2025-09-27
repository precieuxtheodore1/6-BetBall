import express from "express";
import { creerTransaction, obtenirTransactions } from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, creerTransaction);
router.get("/", protect, obtenirTransactions);

export default router;
