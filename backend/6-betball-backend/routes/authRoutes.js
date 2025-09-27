import express from "express";
import { inscription, connexion, profil } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);
router.get("/profil", protect, profil);

export default router;
