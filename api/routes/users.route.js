const usersController = require("../controllers/users.controller");
const express = require("express");
let router = express.Router();

router.get("/",usersController.index);
router.get("/add",usersController.add);
router.get("/list",usersController.getallusers);
/**
 * @swagger
 * /users/list:
 *   get:
 *      description: Used to get all users
 *      tags:
 *          - users
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/list/count",usersController.getusersCount);
/**
 * @swagger
 * /users/list/count:
 *   get:
 *      description: Used to get all users
 *      tags:
 *          - users
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/list/:id",usersController.getUserById);
/**
 * @swagger
 * /users/list/{userId}:
 *   get:
 *      description: Used to get a specific user by his id
 *      tags:
 *          - users
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            description: User id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/register",usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - username
 *                 - email
 *                 - password
 *              properties:
 *                  username:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: sami123
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: sami@gmail.fr
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: azerty123
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/edit/:id",usersController.edit);
router.put("/:id/update",usersController.update);
/**
 * @swagger
 * /users/{userId}/update:
 *   put:
 *      description: Used to update user
 *      tags:
 *          - users
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            description: User id
 *            required: true
 *          - in: body
 *            name: User
 *            description: User data with new values of properties
 *            schema:
 *              type: object
 *              required:
 *                 - username
 *                 - email
 *                 - usertype
 *              properties:
 *                  username:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: sami123
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: sami@gmail.fr
 *                  usertype:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 5
 *                      example: admin
 *
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/delete/:userId",usersController.deleteUser);
/**
 * @swagger
 * /users/delete/{userId}:
 *   delete:
 *      description: Used to delete Customer
 *      tags:
 *          - users
 *      parameters:
 *          - in: path
 *            name: userId
 *            description: User id
 *            type: integer
 *            example: 301
 *            schema:
 *              type: object
 *              required:
 *                 - userId
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;