const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student"); // small 's'

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/9thClass")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

app.get("/students", async (req, res) => {
    try {
        // ✅ req.query.name trim karo yahan, route ke andar
        const nameQuery = req.query.name ? req.query.name.trim() : "";
        const students = await Student.find({
            name: { $regex: nameQuery, $options: "i" }
        });
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error fetching data" });
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
