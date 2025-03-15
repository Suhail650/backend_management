const express = require("express");
const router = express.Router();
const institutionController = require("../controllers/institutionController");

router.get("/", institutionController.getAllInstitutions);
router.get("/:id", institutionController.getInstitutionById);

module.exports = router;
