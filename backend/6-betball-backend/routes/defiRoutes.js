import express from "express";
import { creerDefi, accepterDefi, terminerDefi } from "../controllers/defiController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, creerDefi);
router.post("/:id/accepter", protect, accepterDefi);
router.post("/:id/terminer", protect, terminerDefi);

export default router;
