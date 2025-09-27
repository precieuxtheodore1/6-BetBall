import mongoose from "mongoose";

const defiSchema = new mongoose.Schema({
  jeu: { type: String, required: true }, // ex: FIFA, PES
  mise: { type: Number, required: true },
  createur: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  adversaire: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  statut: { type: String, enum: ["en_attente", "en_cours", "termine"], default: "en_attente" },
  gagnant: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Defi", defiSchema);
