const moongose = require('mongoose')

const AccountWave = moongose.Schema({
    numeroTel: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    motdepasse: {
        type: String,
        required: true
    }
},
    { Timestamps: true }
)
module.exports = moongose.model('AccountWave', AccountWave)

