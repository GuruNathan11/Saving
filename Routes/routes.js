let router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status : 'API Works',
        message : "Welcome to Saving"
    })
});

const users = require('../Model/Models');
router.post('/add',(req,res) => {
    var user = new users();
    user.name = req.body.name;
    user.save((err,users) => {
        if(err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.status(201).send({
                message : "Saving Scheme added successfully",
                data : user
            });
        }
    })
});

var Controller = require('../Controller/Controller.js');

router.route('/users')
.get(Controller.index)

router.route('/users/:user_id')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete);

module.exports = router;