import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  nomComplet: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  telephone: { type: String },
  pays: { type: String },
  typeCompte: { type: String, enum: ["personnel", "admin"], default: "personnel" },
  balance: { type: Number, default: 0 },
  estOfficiel: { type: Boolean, default: false }
}, { timestamps: true });

// Hash du mot de passe avant sauvegarde
userSchema.pre("save", async function(next) {
  if (!this.isModified("motDePasse")) return next();
  const salt = await bcrypt.genSalt(10);
  this.motDePasse = await bcrypt.hash(this.motDePasse, salt);
  next();
});

// Vérification du mot de passe
userSchema.methods.matchPassword = async function(mdp) {
  return await bcrypt.compare(mdp, this.motDePasse);
};

export default mongoose.model("User", userSchema);
