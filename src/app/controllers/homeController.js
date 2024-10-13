class HomeController {
home(req,res) {
    res.render('home')
}
}
module.exports = new HomeController