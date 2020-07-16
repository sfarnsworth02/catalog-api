const mongoose = require('mongoose');

const conceptSchema = new mongoose.Schema({
    concept: {
        type: String,
        required: true,
        unique: true,
    },
    language: {
        type: String,
        required: true,
        unique: false,
    },
    isFramework: {
        type: Boolean,
        required: false,
        unique: false,
    },
    docUrl: {
        type: String,
        required: false,
        unique: false,
    },
    tagRef: {
        // if I'm expecting this to be an array of labels with a link
        // do I need to specify that this is an array?
        tagLabel: {
            // this should be if its a framework or referenced site/video 
            // this will correspond to the ui nav
            // not happy with this set up.... How can it be better
            type: String,
            required: false,
            unique: false,
        },
        refLink: {
            type: String,
            required: false,
            unique: false,
        },
    }
    // need to add a relationship to any notes here
});

module.exports = conceptSchema;