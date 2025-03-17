const {getStudents,updateStudentStatus}= require('../services/studentService.js')

exports. listStudents = async (req, res) => {
  try {
    const { status, name } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (name) filter.name = { $regex: name, $options: "i" };
    const students = await getStudents(filter);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports. approveStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const certificatePath = req.file ? req.file.path : null;
    const student = await updateStudentStatus(id, "Approved", certificatePath);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports. rejectStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await updateStudentStatus(id, "Rejected");
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};