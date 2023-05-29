const router = require('express').Router();

const { verifyToken } = require('../../../lib/helper');
const { postRegister, postLogin, getAllUser } = require('./user.handler');

router.post('/users/register', postRegister);
router.post('/users/login', postLogin);
router.get('/users/all', verifyToken, getAllUser);

module.exports = router;
