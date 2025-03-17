const institutionService = require("../services/institutionService");

const getAllInstitutions = async (req, res) => {
  try {
    const institutions = await institutionService.getAllInstitutions();
    res.status(200).json(institutions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getInstitutionById = async (req, res) => {
  const id = req.params.id;
  try {
    const institution = await institutionService.getInstitutionById(id);
    res.status(200).json(institution);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  const id = req.params.id;
  try {
    const status = req.body.status;
    console.log(status);
    const updatedInstitute = await institutionService.updateStatus(id, status);
    res.status(201).json(updatedInstitute);
  } catch (error) {
    res.status(401).json({ messge: error.message });
  }
};

module.exports = { getAllInstitutions, getInstitutionById, updateStatus };
