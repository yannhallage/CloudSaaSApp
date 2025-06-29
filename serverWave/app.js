const express = require('express')
const app = express();
const route_authwave = require('./routes/authwave.route')
const route_inscription = require('./routes/inscriptionwave.route')
const route_myaccount = require('./routes/myaccountwave.route')

const cors = require('cors')

// autorisation du client avec corsssssss
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/wavewallet/myaccount', route_myaccount);
app.use('/api/wavewallet/inscription/definitive', route_inscription);
app.use('/api/wavewallet/authentification', route_authwave);


module.exports = app
