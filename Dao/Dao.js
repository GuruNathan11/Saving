const { use } = require('../Routes/routes.js');
var users = require('../Model/Models');

exports.Dao_index = function(req,callback){
    users.get(function (err,user){
        if (err)
        callback.json({
            status : "Error",
            message: err
        });
        callback.json({
            status : "Success",
            message: "Got user saving details Successfully",
            data   : user
        });
    });
};

exports.Dao_view = function (req,callback){
    users.findById({_id:req.params.user_id}, function (err,user){
        if(err) callback.send(err)
        else{
            if(user===null){
                callback.json({ message : "No such id is found"})
            }else{
                callback.json({
                    message : "User Saving Details",
                    data    : user
                })
            }
        }
    })
}

exports.Dao_update = function (req,callback) {
    users.findById({_id:req.params.user_id}, function(err,user){
        if(err) callback.send(err);
        user.name = req.body.name;
        user.save(function(err){
            if(err) callback.json(err);
            callback.json({
                message : "User Saving Details Updated Successfully",
                data    : user
            });
        });
    });
};

exports.Dao_Delete = function (req,callback){
    users.deleteOne({_id:req.params.user_id}, function(err,user){
        if (err) callback.send(err);
        callback.json({
            message : "user saving details deleted successfully",
            data    : user
        });
    });
};