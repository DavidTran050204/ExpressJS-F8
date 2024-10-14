
const newRouter = require ('./new')
const siteRouter = require ('./site')
function route(app){
    app.use('/news',newRouter)
    app.use('/home',siteRouter)
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
    //
    
}

module.exports = route; 