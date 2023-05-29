const Users = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function postLogin(req, res, next) {
  var { email, password } = req.body;
  Users.findOne({ email }, function (err, data) {
    if (!data) {
      return res.status(200).json({
        msg: false,
      });
    }
    bcrypt.compare(password, data.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ email }, 'my_secret_key');
        Users.updateMany(
          { email },
          { $set: { token: token } },
          function (err, response) {
            res.status(201).json({
              data: {
                email: data.email,
              },
              token: data.token,
              msg: true,
            });
          }
        );
      } else {
        res.json({
          msg: false,
        });
      }
    });
  });
}

function postRegister(req, res, next) {
  var { id, email, password, retypepassword } = req.body;

  const token = jwt.sign({ email }, 'my_secret_key');

  Users.findOne({ email: email }, function (err, data) {
    if (err) return handleError(err);
    if (data) {
      res.status(200).json({
        msg: 'Email already exists',
      });
    } else {
      if (password === retypepassword) {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          Users.create(
            { id, email, password: hash, token },
            function (err, data) {
              res.status(201).json({
                data: {
                  email: data.email,
                },
                token: data.token,
              });
            }
          );
        });
      } else {
        res.status(200).json({
          msg: 'Password not match',
        });
      }
    }
  });
}

function getAllUser(req, res, next) {
  res.send('Berhasil');
}

module.exports = {
  getAllUser,
  postLogin,
  postRegister,
};
