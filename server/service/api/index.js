const router = require('express').Router();

const dataDatesApi = require('./dataDates/dataDate.route');
const datasApi = require('./datas/data.route');
const mapsApi = require('./maps/maps.route');
const usersApi = require('./users/user.route');

router.use('/api', dataDatesApi, datasApi, mapsApi, usersApi);

module.exports = router;
