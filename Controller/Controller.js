Service = require('../Service/service.js');

exports.index = function(err,save){
    Service.Service_index(err,save);
    if (err) return console.error(err);
};

exports.add = function(err,save){
    Service.Service_add(err,save);
    if (err) return console.error(err);
};

exports.view = function(err,save){
    Service.Service_view(err,save);
    if (err) return console.error(err);
};

exports.update = function(err,save){
    Service.Service_update(err,save);
    if (err) return console.error(err);
};

exports.Delete = function(err,save){
    Service.Service_delete(err,save);
    if (err) return console.error(err);
};