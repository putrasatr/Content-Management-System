const DataDates = require('./dataDate.model');

function getDataDate(req, res, next) {
  DataDates.find({}).exec(function (err, data) {
    res.status(200).json({
      data,
    });
  });
}

function postDataDate(req, res, next) {
  var { letter, frequency } = req.body;
  DataDates.create({ letter, frequency }, (err, data) => {
    res.status(201).json({
      success: true,
      message: 'data have been added',
      data: data,
      fr: data.frequency,
    });
  });
}

function putDataDate(req, res, next) {
  var _id = req.params.id;
  var { letter, frequency } = req.body;
  DataDates.findByIdAndUpdate(
    _id,
    { letter, frequency },
    { new: true },
    (err, data) => {
      res.status(201).json({
        success: true,
        message: 'data have been updated',
        data: data,
      });
    }
  );
}

function deleteDataDate(req, res, next) {
  var _id = req.params.id;
  DataDates.findByIdAndRemove(_id, (err, data) => {
    res.status(201).json({
      success: true,
      message: 'data have been deleted',
      data: data,
    });
  });
}

module.exports = {
  getDataDate,
  postDataDate,
  putDataDate,
  deleteDataDate,
};
