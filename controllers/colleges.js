const college = require("../models/college");
const getAllColleges = async (req, res) => {
    //for getting all the data
    const allCollege = await college.find(req.query);
    res.status(200).json({allCollege});
};

const getAllCollegesTesting = async (req, res) => {
    const allCollege = await college.find(req.query);
    res.status(200).json({allCollege});
};

module.exports = { getAllColleges, getAllCollegesTesting};