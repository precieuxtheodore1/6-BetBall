import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import defiRoutes from "./routes/defiRoutes.js";
import competitionRoutes from "./routes/competitionRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/defis", defiRoutes);
app.use("/api/competitions", competitionRoutes);
app.use("/api/transactions", transactionRoutes);

// Route test
app.get("/", (req, res) => {
  res.send("🚀 Bienvenue sur l'API 6-BetBall !");
});

// Lancement serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
