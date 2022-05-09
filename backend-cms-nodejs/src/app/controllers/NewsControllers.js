
class NewsControllers {
    index(req,res)
    {
        res.render('news');
    }
    show(req,res)
    {
        res.send('news');
    }
}
module.exports = new NewsControllers;