const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        unique: false
    },
    question: {
        type: String,
        required: false,
        unique: false,
    },
    answer: {
        type: String,
        required: false,
        unique: false,
    },
    isAnswered: {
        type: Boolean,
        required: false,
        unique: false,
    }
},
{
    timestamps: true,
})

module.exports = noteSchema;