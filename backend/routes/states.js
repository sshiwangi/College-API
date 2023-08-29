const express = require("express");
const router = express.Router();

const { getAllStates } = require("../controllers/states");

// Defining route to get all states
router.route("/").get(getAllStates);
// router.route("/testing").get(getAllStatesTesting);

module.exports = router;
