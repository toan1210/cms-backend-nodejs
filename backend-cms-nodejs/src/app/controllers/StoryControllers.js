const Story = require('../models/Story');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
class StoryControllers {
    index(req,res,next)
    {      
        Story.find({})
        .then(story => {
            res.render('story', {
                story:mutipleMongooseToObject(story.reverse())
            })
        })
        .catch(next);
    }
     //Phần Thêm Mới Bài Viết
     add(req, res , next){
        const story = new Story({
        author:req.body.author,
        category:req.body.category,
        date:req.body.date,
        images:req.file.filename,
        summary:req.body.summary,
        content:req.body.content,
        title:req.body.title,
        }) 
        story.save()
        .then(() => res.redirect('/story'))
        .catch(error => {
            console.log(error);
           })
      }
      create(req,res)
        {
           res.render('story/add');
        }

    //Phần Sửa Bài Viết

    edit(req,res,next)
    {      
        Story.findById(req.params.id)
        .then(story => {
            let years = story.date.getFullYear();
            let month = story.date.getMonth() + 1;
            let day = story.date.getDay();
            if(month < 10){
                month = "0" + month;
            }
            if(month < 10){
                day = "0" + day;
            }
            let date = years + "-" + month + "-" + day;
            res.render('story/edit', {
                story:mongooseToObject(story),
                "storydate":date,
            })
        })
        .catch(next);
    }
    
    update(req,res,next) {
        Story.updateOne({_id: req.params.id}, req.body)
        .then(() =>  res.redirect('/story'))
        .catch(next);
    }

    delete(req,res,next) {
        Story.deleteOne({_id: req.params.id})
        .then(() =>  res.redirect('back'))
        .catch(next); 
    }


}
module.exports = new StoryControllers;