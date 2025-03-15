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

module.exports = { getAllInstitutions, getInstitutionById };
