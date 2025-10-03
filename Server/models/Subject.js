const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive", "delete"],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('branch', subjectSchema);