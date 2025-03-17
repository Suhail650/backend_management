const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: String,
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  certificate: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;