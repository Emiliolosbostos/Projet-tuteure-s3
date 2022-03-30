const db = require("../config/db.config");

exports.getAllQuestions = (callback) => {
    db.query("SELECT * FROM  `jeux`",function(error, results, fields){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.questionsCount = (callback) => {
    db.query("SELECT count('questCount') FROM `jeux`",function(error, results, fields){
        if(error){
            return callback(error);
        }else{
            return callback(null, results);
        }
    });
};

exports.addQuestion = (data, callback) => {
    db.query(
        "INSERT INTO `jeux`(`questions`,`type`,`jeux_id`,`categorie_id`) VALUES (?,?,?,?)",
        [data.questions,data.type,data.jeux_id,data.categorie_id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Question added successfully`);
        }
    );
};

exports.addAnswer = (data, callback) => {
    db.query(
        "INSERT INTO `answers`(`reponse`,`isCorrect`,`id_question`) VALUES (?,?,?)",
        [data.answer,data.isCorrect,data.question_id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Answer added successfully`);
        }
    );
};