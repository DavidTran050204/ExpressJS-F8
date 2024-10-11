const express = require ('express')
const Router = express.Router()
const newcontroller = require('../app/controllers/newController')
function route(Router){
    app.get('/', (req, res) => {
        res.render('home')
      })
      app.get('/search', (req, res) => {
        res.render('search')
      })
      app.post('/search', function (req, res) { 
        console.log(req.body);
        res.send('')
      })
    //   app.get('/news', (req, res) => {
    //     res.render('news')
    //   })
    
}
module.exports = Router;