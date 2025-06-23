const express = require('express')
const verifyToken = require('../middleware/authwave.middleware')

const route_TransactionAccount = express.Router();
const { GetAccountWave, getAllTransactionsForUser, UpdateServerRechargeAccount, GetAllAccount, CreateTransaction, DeleteAllTransaction, GetReception } = require('../controllers/myaccountwave.controller')


// ici on gere les Auths
route_TransactionAccount.get('/', GetAllAccount)
route_TransactionAccount.post('/transactions', verifyToken, CreateTransaction);
route_TransactionAccount.get('/transactions/:numeroTel', verifyToken, getAllTransactionsForUser)
// route_TransactionAccount.get('/transactions/:id', GetAllTransactions)
route_TransactionAccount.get('/reception/:id', verifyToken, GetReception)
route_TransactionAccount.get('/:id', verifyToken, GetAccountWave)
// route_TransactionAccount.post('/:id', GetAccountWave)
route_TransactionAccount.put('/Erecharge', verifyToken, UpdateServerRechargeAccount)
route_TransactionAccount.delete('/suppressions', DeleteAllTransaction)

module.exports = route_TransactionAccount;