const express = require("express");
const router = express.Router();
const institutionController = require("../controllers/institutionController");

router.get("/", institutionController.getAllInstitutions);
router.get("/:id", institutionController.getInstitutionById);
router.patch("/:id",institutionController.updateStatus);

module.exports = router;
