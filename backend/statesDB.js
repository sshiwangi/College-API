require("dotenv").config();
const connectDB = require("./database/connect");
const state = require("./models/state");

const stateJson = require("./states.json"); // Load your states JSON file

const populateStates = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);

    // Delete existing states before populating
    await state.deleteMany();

    // Create states in the database
    const states = await state.create(stateJson);
    // console.log('states');

    // console.log('States population success');
  } catch (error) {
    console.error("Error populating states:", error);
    //   } finally {
    //     process.exit(); // Close the script after completion
  }
};

populateStates();
