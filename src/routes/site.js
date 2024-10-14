const express = require ("express")
const Router = express.Router()
const siteController = require('../app/controllers/siteController')


Router.use('/',siteController.index)

module.exports = Router