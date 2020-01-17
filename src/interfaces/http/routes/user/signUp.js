const router = require('express').Router();
const validator = require('../../validatorsAndParsers/user/create');

const routesVersioning = require('../../middlewares/routesVersioning');

const controllerV1 = require('../../../../app/v1/user/create')();
// const controllerV2 = require('../../../../app/v2/user/create');

/**
 * @swagger
 * /user/sign-up:
 *   post:
 *     tags:
 *       - Users
 *     name: Sign-up
 *     summary: Register a new user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: payload
 *         in: body
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 *     responses:
 *       '201':
 *         description: User created
 *       '400':
 *         description: Username or email already taken
 */
router.post('/user/sign-up', validator, routesVersioning(controllerV1)); // dependency injection

module.exports = router;
