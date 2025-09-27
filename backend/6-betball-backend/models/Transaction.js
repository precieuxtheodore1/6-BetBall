import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["depot", "retrait", "financement", "pret", "emprunt"], required: true },
  montant: { type: Number, required: true },
  statut: { type: String, enum: ["en_attente", "valide", "refuse"], default: "en_attente" }
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);
