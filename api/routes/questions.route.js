const questionsController = require("../controllers/questions.controller");
const express = require("express");
let router = express.Router();

router.get("/",questionsController.index);
router.get("/add",questionsController.add);
router.get("/list",questionsController.getAllQuestions);
/**
 * @swagger
 * /questions/list:
 *   get:
 *      description: Used to get all questions
 *      tags:
 *          - questions
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/list/count",questionsController.getQuestionsCount);
/**
 * @swagger
 * /questions/list/count:
 *   get:
 *      description: Used to get number of questions
 *      tags:
 *          - questions
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/addquestion",questionsController.addQuestion);
/**
 * @swagger
 * /questions/addquestion:
 *   post:
 *      description: Used to add a question to a specific game
 *      tags:
 *          - questions
 *      parameters:
 *          - in: body
 *            name: Question
 *            description: Question data
 *            schema:
 *              type: object
 *              required:
 *                 - questions
 *                 - type
 *                 - jeux_id
 *                 - categorie_id
 *              properties:
 *                  questions:
 *                      type: text
 *                      example: Question 1
 *                  type:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: javascript
 *                  jeux_id:
 *                      type: int
 *                      example: 1
 *                  categorie_id:
 *                      type: int
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/addanswer",questionsController.addAnswer);
/**
 * @swagger
 * /questions/addanswer:
 *   post:
 *      description: Used to add a question to a specific game
 *      tags:
 *          - questions
 *      parameters:
 *          - in: body
 *            name: Answer
 *            description: Answer data
 *            schema:
 *              type: object
 *              required:
 *                 - answer
 *                 - isCorrect
 *                 - question_id
 *              properties:
 *                  answer:
 *                      type: text
 *                      example: Answer 1
 *                  isCorrect:
 *                      type: int
 *                      minLength: 1
 *                      maxLength: 1
 *                      example: 0
 *                  question_id:
 *                      type: int
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;