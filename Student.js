const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    email: String,
    phone: String,
    mother_name: String,
    father_name: String,
    totalFee: Number,
    paidAmount: Number,
    payments: Array
});

// Explicitly tell Mongoose to use 'Section_A' collection
module.exports = mongoose.model("Student", studentSchema, "Section_A");
