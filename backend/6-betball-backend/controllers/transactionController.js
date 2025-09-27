import Transaction from "../models/Transaction.js";

export const creerTransaction = async (req, res) => {
  try {
    const { type, montant } = req.body;
    const transaction = await Transaction.create({
      utilisateur: req.user.id,
      type,
      montant
    });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenirTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ utilisateur: req.user.id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
