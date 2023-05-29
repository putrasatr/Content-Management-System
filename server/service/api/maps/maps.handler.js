const Maps = require('./maps.model');

function getMaps(req, res, next) {
  Maps.find({}).exec(function (err, data) {
    res.status(200).json({
      data,
    });
  });
}

function postMaps(req, res, next) {
  var { id, title, lat, lang } = req.body;

  Maps.create({ id, title, lat, lang }, (err, data) => {
    res.status(201).json({
      success: true,
      message: 'maps have been added',
      data: data,
    });
  });
}

function putMaps(req, res, next) {
  var id = req.params.id;
  var { title, lat, lang } = req.body;
  Maps.find({ id }, (err, data) => {
    Maps.findByIdAndUpdate(
      data[0]._id,
      { id, title, lat, lang },
      { new: true },
      (err, result) => {
        console.log('ini', result);
        res.status(201).json({
          success: true,
          message: 'Maps have been updated',
          data: result,
        });
      }
    );
  });
}

function deleteMaps(req, res, next) {
  var id = req.params.id;
  Maps.find({ id }, (err, data) => {
    Maps.findByIdAndDelete(data[0]._id, (err, data) => {
      res.status(201).json({
        success: true,
        message: 'Maps have been deleted',
        data: data,
      });
    });
  });
}

module.exports = {
  getMaps,
  postMaps,
  putMaps,
  deleteMaps,
};
