const express = require ("express")
const Router = express.Router()
const siteController = require('../app/controllers/siteController')


Router.use('/:id',siteController.search)
Router.use('/',siteController.index)
 
module.exports = Router