const state = require("../models/state");

const getAllStates = async (req, res) => {
  try {
    const allStates = await state.find();
    console.log(allStates)
    res.status(200).json({ allStates });
    console.log('done')
    
  } catch (error) {
    console.error("Error fetching states:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// const getAllStatesTesting = async (req, res) => {
//     const allState = await state.find(req.query);
//     res.status(200).json({allState});
// };

module.exports = { getAllStates };
