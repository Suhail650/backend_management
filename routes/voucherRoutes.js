const express = require("express");
const { getVoucherRequest, approveVoucherRequest, rejectVoucherRequest } = require("../controllers/voucherController");
const router = express.Router();

router.get("/", getVoucherRequest); // Get all requests
router.post("/:id/approve", approveVoucherRequest); // Approve a request
router.post("/:id/rejected", rejectVoucherRequest); // Reject a request

module.exports = router;