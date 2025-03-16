const voucherService = require("../services/voucherService");

// Get all voucher requests
exports.getVoucherRequest = async (req, res) => {
    try {
        const requests = await voucherService.getVouchers();
        res.json(requests);
    } catch (error) {
        console.error("🔥 Error in getVoucherRequest:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// Approve a voucher request
exports.approveVoucherRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const approvedVoucher = await voucherService.approveVoucherRequest(id);
        res.status(200).json(approvedVoucher);
    } catch (error) {
        console.error("🔥 Error in approveVoucherRequest:", error.message);
        res.status(400).json({ message: error.message });
    }
};

// Reject a voucher request
exports.rejectVoucherRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const rejectedVoucher = await voucherService.rejectVoucherRequest(id);
        res.status(200).json(rejectedVoucher);
    } catch (error) {
        console.error("🔥 Error in rejectVoucherRequest:", error.message);
        res.status(400).json({ message: error.message });
    }
};

