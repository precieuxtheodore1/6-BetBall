import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  jeu: { type: String, required: true },
  fraisParticipation: { type: Number, required: true },
  prix: { type: Number, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  statut: { type: String, enum: ["ouvert", "en_cours", "termine"], default: "ouvert" }
}, { timestamps: true });

export default mongoose.model("Competition", competitionSchema);
