const AccountWave = require('../models/accountwave.model');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Générateur OTP
const generateOTP = (length = 6) => {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
};

// Inscription d'un nouvel utilisateur
const PostInscription_Wave = async (req, res) => {
    try {
        const { numeroTel, name, prenom, sold, ville, motdepasse } = req.body;

        if (!numeroTel || !name || !prenom || sold === undefined || !ville || !motdepasse) {
            return res.status(400).json({
                message: "Tous les champs sont requis."
            });
        }

        const personnel_wave = await AccountWave.create(req.body);

        const token = jwt.sign(
            { numeroTel, motdepasse },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        console.log(token)
        console.log(personnel_wave._id)
        res.status(201).json({
            message: "Compte WaveWallet créé avec succès.",
            token,
            userId: personnel_wave._id
        });

    } catch (error) {
        console.error("Erreur lors de la création du compte:", error);

        res.status(500).json({
            message: "Une erreur est survenue lors de la création du compte.",
            error: error.message || "Erreur inconnue"
        });
    }
};

// Vérification du numéro et envoi du code OTP
const PostNumeroandOTP = async (req, res) => {
    try {
        const { numeroTel } = req.body;

        if (!numeroTel) {
            return res.status(400).json({ message: "Le numéro est requis." });
        }

        const personnel_existant = await AccountWave.findOne({ numeroTel });

        if (personnel_existant) {
            console.log('numero deja enregistrer')
            return res.status(400).json({
                message: "Le numéro est déjà enregistré."
            });
        }

        const codeOTP = generateOTP();

        res.status(200).json({
            codeOTP
        });
        console.log(`le code otp demander  ${codeOTP}`)

    } catch (error) {
        console.error("Erreur lors de la vérification du numéro:", error);

        res.status(500).json({
            message: "Une erreur est survenue lors de l'envoi du code OTP.",
            error: error.message || "Erreur inconnue"
        });
    }
};


module.exports = {
    PostInscription_Wave,
    PostNumeroandOTP
};


