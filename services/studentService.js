const Student =require('../models/Student.js')

exports. getStudents = async (filters) => {
  return await Student.find(filters);
};

exports. updateStudentStatus = async (id, status, certificate = null) => {
  return await Student.findByIdAndUpdate(id, { status, certificate }, { new: true });
};