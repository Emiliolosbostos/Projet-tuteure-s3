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
    db.query("SELECT count('customerNumber') FROM `users`",function(error, results, fields){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.getCustomerById = (id,callback) => {
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
        "INSERT INTO `users`(`username`,`email`,`password`,`ip`) VALUES (?,?,?,1)",
        [data.username,data.email,data.password],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};

exports.updateCustomer = (id,data,callback) => {
    db.query("UPDATE `users` SET `customerName`=?,`contactLastName`=?,`contactFirstName`=?,`phone`=?,`addressLine1`=?,`addressLine2`=?,`city`=?,`state`=?,`postalCode`=?,`country`=?,`salesRepEmployeeNumber`=?,`creditLimit`=? WHERE `customerNumber` = ?",
        [data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesRepEmployeeNumber, data.creditLimit, id],
        function(error, results){
            if(error){
                return callback(error);
            }else{
                return callback(null, "Update succeeded!");
            }
        });
};

exports.deleteCustomer = (id,callback) => {
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



