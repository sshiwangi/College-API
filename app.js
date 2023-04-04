require("dotenv").config();
const express = require("express");
const app = express()
const connectDB = require("./database/connect");
const PORT = process.env.PORT || 8000;

const colleges_routes = require("./routes/colleges");
app.get("/", (req, res) => {
    res.send("Hi, I am a college API");
})

//middleware or setting router
app.use("/api/colleges", colleges_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();