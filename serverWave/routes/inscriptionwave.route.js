const express = require('express')
const route_Inscription_Wave = express.Router();
const { PostInscription_Wave, PostNumeroandOTP } = require('../controllers/inscriptionwave.controller')
// ici on gere les Auths
route_Inscription_Wave.post('/', PostInscription_Wave)
// ici jai fais une route pour la verification et le codeOTP 
route_Inscription_Wave.post('/numero', PostNumeroandOTP)

module.exports = route_Inscription_Wave;