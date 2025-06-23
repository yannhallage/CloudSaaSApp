const mongoose = require('mongoose');

const Erecharge = new mongoose.Schema({
    numero_expediteur: {
        type: String,
        required: true
    },
    numero_destinataire: {
        type: String,
        required: true
    },
    type_transaction: {
        type: String,
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    dateTransaction: {
        type: String, // Ou "Date" si tu préfères l'automatisation
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Erecharge', Erecharge);
