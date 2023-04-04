const express = require("express");
const router = express.Router();

const {getAllColleges, getAllCollegesTesting} = require("../controllers/colleges");

//Defining Routes
router.route("/").get(getAllColleges);
router.route("/testing").get(getAllCollegesTesting);

module.exports = router;