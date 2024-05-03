import express from "express";

// Import du module jwt

const router = express.Router();

export const get = (req, res) => {
  
    // Remplacez cette portion de code par votre traitement du jeton JWT
    return res.status(418).json({ error: 'Je suis une théière' });

};

router.get('/', get);

export default router;
