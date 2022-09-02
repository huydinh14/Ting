const User = require('../models/User')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class NewController {
    // [GET] /news
    index(req, res, next) {
        // User.find({}, (err, users) => {
        //     console.log(err);
        //     if(!err)
        //     {
        //         res.json(users);
        //     }
        //     else
        //     {
        //         res.status(400).json({error: "ERROR"});
        //     }
        // });

        User.find({})
            .then(users => {
                res.render('news', {
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
        // res.render('news');
    }

    // [GET] /new/:slug
    show(req, res) {
        res.render('news')
    }
}

module.exports = new NewController();
