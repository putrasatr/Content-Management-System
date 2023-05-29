const router = require('express').Router();
const { verifyToken } = require('../../../lib/helper');
const {
  getData,
  postData,
  putData,
  deleteData,
  checkData,
} = require('./data.handler');

router.get('/data', verifyToken, getData);
router.post('/data', verifyToken, postData);
router.put('/data/:id', verifyToken, putData);
router.delete('/data/:id', verifyToken, deleteData);
router.post('/checkdata', verifyToken, checkData);

module.exports = router;
