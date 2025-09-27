import express from "express";
import { creerCompetition, rejoindreCompetition, cloturerCompetition } from "../controllers/competitionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, creerCompetition);
router.post("/:id/rejoindre", protect, rejoindreCompetition);
router.post("/:id/cloturer", protect, cloturerCompetition);

export default router;
