const Router = require('express').Router;
const passport = require('passport');
const { getSign, postSign } = require('../controllers/user.controllers/signController');
const { userExistMiddleware } = require('../middlewares/middlewares.js');

const router = Router();

router.get('/', getSign);
router.post('/', userExistMiddleware, postSign);

module.exports = router;
