import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Générer un token JWT
const genererToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Inscription
export const inscription = async (req, res) => {
  try {
    const { nomComplet, email, motDePasse, telephone, pays } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ error: "Cet email est déjà utilisé" });

    const user = await User.create({
      nomComplet,
      email,
      motDePasse,
      telephone,
      pays
    });

    res.status(201).json({
      _id: user._id,
      nomComplet: user.nomComplet,
      email: user.email,
      typeCompte: user.typeCompte,
      token: genererToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Connexion
export const connexion = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(motDePasse))) {
      res.json({
        _id: user._id,
        nomComplet: user.nomComplet,
        email: user.email,
        typeCompte: user.typeCompte,
        token: genererToken(user._id)
      });
    } else {
      res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Profil utilisateur
export const profil = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-motDePasse");
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
