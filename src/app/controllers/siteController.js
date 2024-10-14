class siteController {
    index(req,res){
res.send('home')
    }
    search(req,res){
res.render('search')
    }
}
module.exports=new siteController