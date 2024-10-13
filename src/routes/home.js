const express = require ('express')
const homeController = require('../app/controllers/homeController')
const Router =  express.Router()

Router.use('/',homeController.home)


module.exports = Router