import Competition from "../models/Competition.js";

export const creerCompetition = async (req, res) => {
  try {
    const { nom, jeu, fraisParticipation, prix } = req.body;
    const competition = await Competition.create({ nom, jeu, fraisParticipation, prix });
    res.status(201).json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const rejoindreCompetition = async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (!competition) return res.status(404).json({ error: "Compétition introuvable" });

    if (!competition.participants.includes(req.user.id)) {
      competition.participants.push(req.user.id);
    }
    await competition.save();

    res.json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const cloturerCompetition = async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (!competition) return res.status(404).json({ error: "Compétition introuvable" });

    competition.statut = "termine";
    await competition.save();

    res.json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
