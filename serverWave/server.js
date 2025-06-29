const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const http = require('http');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    const serverHttp = http.createServer(app);

    serverHttp.listen(PORT, () => {
        console.log(`Le serveur est lancé sur le port : ${PORT}`);
    });

}).catch(error => {
    console.error("Erreur de connexion à MongoDB :", error);
});


//just an tst
