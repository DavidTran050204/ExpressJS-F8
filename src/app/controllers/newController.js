class newController {
    index(req , res) {
        res.render('news');
    }
}
module.exports = new newController;