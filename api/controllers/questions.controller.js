const questionsService = require("../services/questions.service");

exports.index = (req,res) => {
    questionsService.getAllQuestions((error,results)=>{
        if (error){
            console.log(error);
            res.render('questions/index', {  users: null });
        }
        res.render('questions/index', {  users: results });
    });
};

exports.add = (req,res) => {
    res.render('questions/add');
};

exports.getAllQuestions = (req,res,next)=>{
    questionsService.getAllQuestions((error,results)=>{
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

exports.getQuestionsCount = (req,res,next)=>{
    questionsService.questionsCount((error,results)=>{
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

exports.addQuestion = (req,res,next)=>{
    // validation area
    const data = {
        questions:req.body.questions,
        type:req.body.type,
        jeux_id:req.body.jeux_id,
        categorie_id:req.body.categorie_id

    };
    console.log(data);
    questionsService.addQuestion(data,(error,results)=>{
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

exports.addAnswer = (req,res,next)=>{
    // validation area
    const data = {
        answer:req.body.answer,
        isCorrect:req.body.isCorrect,
        question_id:req.body.question_id

    };
    console.log(data);
    questionsService.addAnswer(data,(error,results)=>{
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