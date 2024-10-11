class NewController {
    index(req , res) {
        res.render('news');
    }
}
// với mấy cái class thì hãy viết hoa chữ cái đầu
module.exports = new NewController;