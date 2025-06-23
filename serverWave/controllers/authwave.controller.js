require('dotenv').config();
const Account = require('../models/accountwave.model');
const jwt = require('jsonwebtoken');

const otpMap = new Map();

const PostAutthentification_Wave = async (req, res) => {
    try {
        const { numeroTel, motdepasse } = req.body;
        const user = await Account.findOne({ numeroTel, motdepasse });

        if (!user) {
            return res.status(404).json({ message: 'Compte non trouvé !' });
        }

        const codeOTP = generateOTP();
        otpMap.set(numeroTel, { code: codeOTP, userId: user._id });
        console.log(codeOTP)
        res.status(200).json({
            message: 'Utilisateur trouvé, code OTP généré',
            codeOTP
        });
    } catch (error) {
        console.error("Erreur lors de l'authentification:", error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const PostNumeroandOTP = async (req, res) => {
    try {
        const { numeroTel, codeOTP } = req.body;

        const user = await Account.findOne({ numeroTel });
        if (!user) {
            return res.status(404).json({ message: 'Compte non trouvé !' });
        }

        const otpData = otpMap.get(numeroTel);

        if (!otpData || otpData.code !== codeOTP) {
            return res.status(400).json({ message: 'Code OTP invalide' });
        }

        otpMap.delete(numeroTel); // Supprime le code après utilisation

        const token = jwt.sign(
            { numeroTel },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log(token)
        console.log(otpData.userId)
        return res.status(200).json({
            message: 'Authentification réussie',
            token,
            userId: otpData.userId
        });

    } catch (error) {
        console.error("Erreur OTP:", error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};


const generateOTP = (length = 6) => {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
};

module.exports = { PostAutthentification_Wave, PostNumeroandOTP };
