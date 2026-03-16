const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://mongodb:XXXX@cluster0.wqffik4.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});