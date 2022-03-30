const db = require("../config/db.config");

exports.getAllusers = (callback) => {
    db.query("SELECT * FROM  `users`",function(error, results, fields){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.usersCount = (callback) => {
    db.query("SELECT count('usersNumber') FROM `users`",function(error, results, fields){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.getUserById = (id, callback) => {
    db.query("SELECT * FROM `users` WHERE `id` = ?",
        [id],
        function(error, results){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.register = (data, callback) => {
    db.query(
        "INSERT INTO `users`(`username`,`email`,`password`) VALUES (?,?,?)",
        [data.username,data.email,data.password],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};

exports.updateUser = (id, data, callback) => {
    db.query("UPDATE `users` SET `username`=?,`email`=?,`usertype`=? WHERE `id` = ?",
        [data.username, data.email, data.usertype, id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};

exports.deleteUser = (id, callback) => {
    db.query("DELETE FROM `users` WHERE `id` = ?",
        [id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Delete succeeded!");
            }
        });
};



