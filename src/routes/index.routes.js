const Router = require('express').Router;
const { authMiddleware } = require('../middlewares/middlewares');
const loginRouter = require('./login.routes');
const signUpRouter = require('./signup.routes');
const logoutRouter = require('./logout.routes');
const infoRouter=require('./info.routes')
const randomRouter=require('./random.routes')
const getHome = require('../controllers/user.controllers/homeController');

const router = Router();

router.get('/', authMiddleware, getHome);

router.use('/login', loginRouter);
router.use('/signup', signUpRouter);
router.use('/logout', logoutRouter);
router.use('/info', infoRouter);
router.use('/random', randomRouter);

//404
router.get('/signup-error', (req, res) => {
    res.render('signuperror');
});

router.get('/login-error', (req, res) => {
    res.render('loginError');
});

module.exports = router;
