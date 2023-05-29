const mongoose = require('mongoose');

const connectDb = () => {
  mongoose.connect('mongodb://localhost/client', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
