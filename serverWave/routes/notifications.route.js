const express = require('express')
const verifyToken = require('../middleware/auth.middleware')
const route_notifications = express.Router()
const { GetNotifications,
    PostNotification , DeleteAllNotification} = require('../controllers/notifications.controller')

route_notifications.get('/', verifyToken,GetNotifications)
route_notifications.post('/',verifyToken, PostNotification)
route_notifications.delete('/',verifyToken, DeleteAllNotification)

module.exports = route_notifications