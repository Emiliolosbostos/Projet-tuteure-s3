const usersService = require("../services/users.service");

exports.index = (req,res) => {
    usersService.getAllusers((error,results)=>{
        if (error){
            console.log(error);
            res.render('users/index', {  users: null });
        }
        res.render('users/index', {  users: results });
    });
};

exports.add = (req,res) => {
    res.render('users/add');
};

exports.getallusers = (req,res,next)=>{
    usersService.getAllusers((error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};


exports.getusersCount = (req,res,next)=>{
    usersService.usersCount((error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};



exports.edit = (req,res,next)=>{
    usersService.getUserById(req.params.id,(error, results)=>{
        if (error){
            console.log(error);
            res.redirect("/users");
        }
        console.log(results);
        res.render("users/edit",{user:results[0]});
    });
};

exports.getUserById = (req, res, next)=>{
    usersService.getUserById(req.params.id,(error, results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};


exports.register = (req,res,next)=>{
    // validation area
    const data = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    };
    console.log(data);
    usersService.register(data,(error,results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.update = (req,res)=>{
    const data = {
        id:req.body.id,
        username:req.body.username,
        email:req.body.email,
        usertype:req.body.usertype
    };
    console.log(data);
    console.log(req.params.id);
    usersService.updateUser(req.params.id,data,(error, results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};

exports.deleteUser = (req, res, next)=>{
    usersService.deleteUser(req.params.id,(error, results)=>{
        if (error){
            console.log(error);
            return res.status(400).send({success:0,data:"Bad request"});
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};




