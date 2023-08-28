const mongoose = require('mongoose');

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
module.exports = connectDB;