const Datas = require('./data.model');

function getData(req, res, next) {
  Datas.find({}).exec(function (err, data) {
    res.status(200).json({
      data,
    });
  });
}

function postData(req, res, next) {
  var { id, letter, frequency } = req.body;
  Datas.create({ id, letter, frequency }, (err, data) => {
    res.status(201).json({
      success: true,
      message: 'data have been added',
      data: data,
    });
  });
}

function putData(req, res, next) {
  var { letter, frequency, id } = req.body;
  Datas.find({ id }, (err, data) => {
    Datas.findByIdAndUpdate(
      data[0]._id,
      { id, letter, frequency },
      { new: true },
      (err, result) => {
        res.status(201).json({
          success: true,
          message: 'data have been updated',
          data: result,
        });
      }
    );
  });
}

function deleteData(req, res, next) {
  var { id } = req.params;
  Datas.find({ id }, (err, data) => {
    Datas.findByIdAndDelete(data[0]._id, (err, data) => {
      res.status(201).json({
        success: true,
        message: 'data have been deleted',
        data: data,
      });
    });
  });
}

function checkData(req, res, next) {
  var { letter } = req.body;

  Datas.exists({ letter }, (err, data) => {
    res.status(200).json(data);
  });
}

module.exports = {
  getData,
  postData,
  putData,
  deleteData,
  checkData,
};
