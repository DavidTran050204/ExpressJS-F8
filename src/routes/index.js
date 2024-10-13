
const newRouter = require ('./new')
const homeRouter = require ('./home')
function route(app){
    app.use('/news',newRouter)
    app.use('/home',homeRouter)
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
    //   app.get('/search', (req, res) => {
    //     res.render('search')
    //   })
    //   app.post('/search', function (req, res) { 
    //     console.log(req.body);
    //     res.send('')
    //   })
    //   app.get('/news', (req, res) => {
    //     res.render('news')
    //   })
    
}

module.exports = route; 