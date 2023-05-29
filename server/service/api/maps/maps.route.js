const router = require('express').Router();
const Maps = require('./maps.model');
const { verifyToken } = require('../../../lib/helper');
const { getMaps, postMaps, putMaps, deleteMaps } = require('./maps.handler');

router.get('/maps', verifyToken, getMaps);
router.post('/maps', verifyToken, postMaps);
router.put('/maps/:id', verifyToken, putMaps);
router.delete('/maps/:id', verifyToken, deleteMaps);

module.exports = router;
