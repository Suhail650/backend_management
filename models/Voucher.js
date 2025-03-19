const mongoose = require('mongoose')

const voucherSchema = mongoose.Schema({
    institutionName: { type: String, required: true },
    noOfVouchers: { type: Number, required: true },
    requestStatus: { 
        type: String, 
        enum: ["Pending", "Approved", "Rejected"], 
        default: "Pending" 
    },
    invoice:{type: Number, required:true , unique:true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Voucher', voucherSchema)