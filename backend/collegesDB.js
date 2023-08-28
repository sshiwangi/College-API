require("dotenv").config();
const connectDB = require("./database/connect");
const college = require("./models/college");

const collegeJson = require("./colleges.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await college.deleteMany();
        await college.create(collegeJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start();
