const express = require('express')
const route_authentifcation = express.Router();
const { PostAutthentification } = require('../controllers/authentification.controller')
// ici on gere les Auths
route_authentifcation.post('/',PostAutthentification)

module.exports = route_authentifcation;