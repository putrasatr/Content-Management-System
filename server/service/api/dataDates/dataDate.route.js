const router = require('express').Router();
const { verifyToken } = require('../../../lib/helper');
const {
  getDataDate,
  postDataDate,
  putDataDate,
  deleteDataDate,
} = require('./dataDate.handler');

router.get('/dataDate', verifyToken, getDataDate);
router.post('/dataDate', verifyToken, postDataDate);
router.put('/dataDate/:id', verifyToken, putDataDate);
router.delete('/dataDate/:id', verifyToken, deleteDataDate);

module.exports = router;
