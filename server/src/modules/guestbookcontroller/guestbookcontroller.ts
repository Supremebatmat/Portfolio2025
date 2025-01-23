import type { Request, Response } from "express";
import db from  "../../db";

// Récupérer tous les messages
export const getMessages = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM messages ORDER BY created_at DESC",
    );
    res.json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des messages" });
  }
};

// Ajouter un nouveau message
export const addMessage = async (req: Request, res: Response) => {
  const { name, message } = req.body;
  try {
    await db.query("INSERT INTO messages (name, message) VALUES (?, ?)", [
      name,
      message,
    ]);
    res.status(201).json({ message: "Message ajouté avec succès" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'ajout du message" });
  }
};
