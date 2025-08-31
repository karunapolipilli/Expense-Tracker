const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    icon: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Income', IncomeSchema);
