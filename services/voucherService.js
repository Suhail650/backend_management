const Voucher = require("../models/Voucher"); // Ensure correct model name

// Get all voucher requests
const getVouchers = async () => {
    return await Voucher.find();
};

// Approve voucher request & create voucher
const approveVoucherRequest = async (id) => {
    const request = await Voucher.findById(id);
    
    if (!request) {
        throw new Error("Voucher request not found.");
    }

    if (request.requestStatus !== "Pending") {
        throw new Error("Only pending requests can be approved.");
    }

    // // Create a new approved voucher
    // const newVoucher = new Voucher({
    //     institutionName: request.institutionName,
    //     noOfVouchers: request.noOfVouchers,
    //     invoice: request.invoice,
    //     requestStatus: "Approved" // Mark as approved
    // });

    // await newVoucher.save(); // Save the new voucher

    // Update the request status
    request.requestStatus = "Approved";
    await request.save();

    return request;
};

// Reject voucher request
const rejectVoucherRequest = async (id) => {
    const request = await Voucher.findById(id);

    if (!request) {
        throw new Error("Voucher request not found.");
    }

    if (request.requestStatus !== "Pending") {
        throw new Error("Only pending requests can be rejected.");
    }

    request.requestStatus = "Rejected";
    return await request.save();
};

module.exports = { getVouchers, approveVoucherRequest, rejectVoucherRequest };
