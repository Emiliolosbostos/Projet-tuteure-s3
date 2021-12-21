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
router.get("/list/:id",usersController.getCustomerById);
/**
 * @swagger
 * /users/list/{customerId}:
 *   get:
 *      description: Used to get a specific customer by his id
 *      tags:
 *          - users
 *      parameters:
 *          - in: path
 *            name: customerId
 *            type: integer
 *            description: Customer id
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
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - city
 *                 - state
 *                 - postalCode
 *                 - country
 *                 - salesRepEmployeeNumber
 *                 - creditLimit
 *              properties:
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Sami
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Grosse
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Moula
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 06123456789
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 1 rue de Paris
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Paris 18ème
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Ile de France
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 75018
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: France
 *                  salesRepEmployeeNumber:
 *                      type: integer
 *                      example: 1702
 *                  creditLimit:
 *                      type: decimal(10,2)
 *                      example: 54000.00
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/delete/:customerId",usersController.deleteCustomer);
/**
 * @swagger
 * /users/delete/{customerId}:
 *   delete:
 *      description: Used to delete Customer
 *      tags:
 *          - users
 *      parameters:
 *          - in: path
 *            name: customerId
 *            description: Customer ID
 *            type: integer
 *            example: 301
 *            schema:
 *              type: object
 *              required:
 *                 - customerNumber
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;