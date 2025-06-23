const express = require('express')
const verifyToken  = require('../middleware/auth.middleware')
const route = express.Router()
const {
    GetPersonnel,
    GetPersonnels,
    PostPersonnel,
    DeletePersonnel,
    UpdatePersonnel,
    DeletAllPersonnel
} = require('../controllers/crudPersonnel.controller')



// cas d'un get 
route.get('/', verifyToken, GetPersonnels)

// recuperation en fonction de l'id 
route.get('/:id',  verifyToken,GetPersonnel)

// // dans le cas d'une creation 
route.post('/', verifyToken,PostPersonnel)

// // dans le cas d'une mise a jour
route.put('/:id', verifyToken,UpdatePersonnel)

// // dans le cas d'une suppression
route.delete('/:id', verifyToken,DeletePersonnel)

// cas de suppression all data
route.delete('/', verifyToken,DeletAllPersonnel)



module.exports = route