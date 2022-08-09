// Global Imports
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        default: ''
    },
    courseImage: {
        type: String,
        default: ''
    },
    universityName: {
        type: String,
        default: ''
    },
    facultyProfile: {
        type: String,
        default: ''
    },
    learningDuration: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    certificateImageUrl: {
        type: String,
        default: ''
    },
    eligibility: {
        type: String,
        default: ''
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('course', courseSchema);