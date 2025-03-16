const mongoose = require('mongoose')

const voucherSchema = mongoose.Schema({
    institutionName: { type: String, required: true },
    noOfVouchers: { type: Number, required: true },
    requestStatus: { 
        type: String, 
        enum: ["Pending", "Approved", "Rejected"], 
        default: "Pending" 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Voucher', voucherSchema)