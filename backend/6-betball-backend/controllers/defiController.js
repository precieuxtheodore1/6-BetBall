import Defi from "../models/Defi.js";

export const creerDefi = async (req, res) => {
  try {
    const { jeu, mise } = req.body;
    const defi = await Defi.create({ jeu, mise, createur: req.user.id });
    res.status(201).json(defi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const accepterDefi = async (req, res) => {
  try {
    const defi = await Defi.findById(req.params.id);
    if (!defi) return res.status(404).json({ error: "Défi introuvable" });

    defi.adversaire = req.user.id;
    defi.statut = "en_cours";
    await defi.save();

    res.json(defi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const terminerDefi = async (req, res) => {
  try {
    const { gagnantId } = req.body;
    const defi = await Defi.findById(req.params.id);
    if (!defi) return res.status(404).json({ error: "Défi introuvable" });

    defi.gagnant = gagnantId;
    defi.statut = "termine";
    await defi.save();

    res.json(defi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
