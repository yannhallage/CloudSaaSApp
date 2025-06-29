const express = require('express')
const route_authentifcation_Wave = express.Router();
const { PostAutthentification_Wave, PostNumeroandOTP } = require('../controllers/authwave.controller')

// les api venant de la page authentifications
route_authentifcation_Wave.post('/', PostAutthentification_Wave)
route_authentifcation_Wave.post('/otp', PostNumeroandOTP)

module.exports = route_authentifcation_Wave;