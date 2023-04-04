const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('college',collegeSchema);